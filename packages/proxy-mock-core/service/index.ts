import { ConfigOptions, MainServiceReturn } from './types'
import path from 'path'
import express from 'express'
import cors from 'cors'
import generatedCodeRouter from './controllers/generatedCode'
import mockRouter from './controllers/mock'
import mockSence from './controllers/mockSence'
import codeTemplate from './controllers/codeTemplate'
import { getMockConfig, getMockList } from './fileModel/mockList'
import { dynamicReadJs, getAvailablePort, sleep } from './utils'
import { initFile } from './utils/init'
import history from 'connect-history-api-fallback'
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

  const publicRouter = express.Router()
  publicRouter.use(history())
  let resolvePath = import.meta?.resolve
  //@ts-ignore
  if (require?.resolve) {
    // @ts-ignore
    resolvePath = require.resolve
  }
  const packagePath = resolvePath('proxy-mock-core')
  const packageDir = path.dirname(packagePath).replace(/^file:\/\/\//g, '')
  publicRouter.use(express.static(path.join(packageDir, 'public')))

  app.use('/public', publicRouter)

  const findPort = await getAvailablePort(port)
  const serviceUrl = `http://localhost:${findPort}/public`
  app.listen(findPort, () => {
    console.log(`mock服务启动:${serviceUrl}`)
  })

  initFile(options)
  const getMockInfo = async (url: string, method: string, proxyParams: any) => {
    if (!options.mockDataFileUrl) return false
    const list = await getMockList(options.mockDataFileUrl)
    const findMock = list.find(
      item => item.method === method.toLocaleUpperCase() && item.url === url,
    )
    if (!findMock) return false
    const { mockConfigJson, mockFileUrl } = await getMockConfig(
      options.mockDataFileUrl,
      findMock,
    )
    if (!mockConfigJson.mock || !mockFileUrl) return false
    await sleep(mockConfigJson.delay)
    const fn = await dynamicReadJs(mockFileUrl)
    if (typeof fn === 'function') {
      return await fn(...proxyParams)
    } else {
      return fn
    }
  }
  return {
    getMockInfo,
    serviceUrl,
  }
}
export default mainService
