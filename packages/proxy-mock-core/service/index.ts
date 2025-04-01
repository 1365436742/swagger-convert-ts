import { ConfigOptions, MainServiceReturn } from './types'
import path from 'path'
import express from 'express'
import cors from 'cors'
import generatedCodeRouter from './controllers/generatedCode'
import mockRouter from './controllers/mock'
import mockSence from './controllers/mockSence'
import codeTemplate from './controllers/codeTemplate'
import toolbox from './controllers/toolbox'
import { getMockConfig, getMockList } from './fileModel/mockList'
import { dynamicReadJs, getAvailablePort, sleep } from './utils'
import { initFile } from './utils/init'
import { responseInterceptor } from './utils/responseInterceptor'
import history from 'connect-history-api-fallback'
import { extractRouteParams, hasDynamicParams } from './utils/marchUrl'
const app = express()
const mainService = async (
  options: ConfigOptions = {},
): Promise<MainServiceReturn> => {
  const { port = 3001 } = options

  app.use(cors())
  app.use(express.json({ limit: '50mb' }))

  app.use('/generatedCode', generatedCodeRouter(options))
  app.use('/mock', mockRouter(options))
  app.use('/mockSence', mockSence(options))
  app.use('/codeTemplate', codeTemplate(options))
  app.use('/toolbox', toolbox(options))

  const publicRouter = express.Router()
  publicRouter.use(history())
  let resolvePath = import.meta?.resolve
  //@ts-ignore
  if (require?.resolve) {
    // @ts-ignore
    resolvePath = require.resolve
  }
  const packagePath = resolvePath('proxy-mock-core')
  const packageDir = path
    .dirname(packagePath)
    .replace(/^file:\/\/\//g, process.platform === 'win32' ? '' : '/')
  publicRouter.use(express.static(path.join(packageDir, 'public')))

  app.use('/public', publicRouter)

  const findPort = await getAvailablePort(port)
  const serviceUrl = `http://localhost:${findPort}/public`
  const server = app.listen(findPort, () => {
    console.log(`mock服务启动:${serviceUrl}`)
  })

  initFile(options)
  const getMockInfo = async (url: string, method: string, proxyParams: any) => {
    if (!options.mockDataFileUrl) return false
    const list = await getMockList(options.mockDataFileUrl)
    let params: null | Record<string, string> = {}
    const findMock = list.find(item => {
      if (!hasDynamicParams(item.url)) {
        return item.method === method.toLocaleUpperCase() && item.url === url
      } else {
        params = extractRouteParams(url, item.url)
        return item.method === method.toLocaleUpperCase() && params
      }
    })
    if (!findMock) return false
    const { mockConfigJson, mockFileUrl } = await getMockConfig(
      options.mockDataFileUrl,
      findMock,
    )
    if (!mockConfigJson.mock || !mockFileUrl) return false
    await sleep(mockConfigJson.delay)
    const fn = await dynamicReadJs(mockFileUrl)
    if (typeof fn === 'function') {
      try {
        return await fn(proxyParams, params)
      } catch (error) {
        console.log('js发生错误：' + url, error)
        return null
      }
    } else {
      return fn
    }
  }
  return {
    getMockInfo,
    serviceUrl,
    serverClose: () => {
      server.close()
    },
  }
}
export { responseInterceptor }
export default mainService
