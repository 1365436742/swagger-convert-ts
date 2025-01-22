import { PluginOption } from 'vite'
import mainService from './dist/index'
import path from 'path'
const generatedCodeFileUrl = path.resolve(__dirname, './eg-test/request-apis')
const mockDataFileUrl = path.resolve(__dirname, './eg-test/mock')
const mainServiceInfo = mainService({
  generatedCodeFileUrl,
  mockDataFileUrl,
})
export default function devServicePlugin(): PluginOption {
  mainServiceInfo.getMockInfo('app/list', 'get').then((res: any) => {
    console.log(res, 'xxxxx')
  })
  return {
    name: 'dev-service-plugin', // 插件名称
    handleHotUpdate() {
      setTimeout(() => {
        console.log('服务端口', mainServiceInfo.serviceUrl)
      }, 0)
    },
  }
}
