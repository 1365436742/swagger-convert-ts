import { dynamicReadJs, sleep } from '.'
import { getMockConfig, getMockList } from '../fileModel/mockList'
import { ConfigOptions } from '../types'
import { extractRouteParams, hasDynamicParams } from './marchUrl'

export const generateGetMockInfo =
  (options: ConfigOptions) =>
  async (url: string, method: string, proxyParams: any) => {
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
