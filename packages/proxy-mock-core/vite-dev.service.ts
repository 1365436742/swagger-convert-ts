import { Plugin } from 'vite'
import mainService from './dist/index'
import path from 'path'
import { MainServiceReturn } from './dist/types'
const generatedCodeFileUrl = path.resolve(__dirname, './eg-test/request-apis')
const mockDataFileUrl = path.resolve(__dirname, './eg-test/mock')
let mainServiceInfo: MainServiceReturn | null = null
export default function devServicePlugin(): Promise<Plugin<any>> {
  return new Promise<Plugin<any>>(async resolve => {
    if (!mainServiceInfo) {
      mainServiceInfo = await mainService({
        port: 3001,
        generatedCodeFileUrl,
        mockDataFileUrl,
      })
    }
    mainServiceInfo.getMockInfo('app/list', 'get').then((res: any) => {
      console.log(res, 'xxxxx')
    })
    resolve({
      name: 'dev-service-plugin', // 插件名称
      handleHotUpdate() {
        setTimeout(() => {
          console.log('服务端口', mainServiceInfo?.serviceUrl)
        }, 0)
      },
    })
  })
}
