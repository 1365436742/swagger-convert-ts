import { ConfigEnv, Plugin, UserConfig } from 'vite'
import mainService from './dist/index'
import path from 'path'
import { MainServiceReturn } from './dist/types'
const generatedCodeFileUrl = path.resolve(__dirname, './eg-test/request-apis')
const mockDataFileUrl = path.resolve(__dirname, './eg-test/mock')
let mainServiceInfo: MainServiceReturn | null = null
export default function devServicePlugin(): Plugin {
  return {
    name: 'dev-service-plugin',
    // 配置
    async config(conf: UserConfig, env: ConfigEnv) {
      if (env.command === 'serve') {
        mainServiceInfo = await mainService({
          port: 3001,
          generatedCodeFileUrl,
          mockDataFileUrl,
        })
        mainServiceInfo.getMockInfo('app/list', 'get').then((res: any) => {
          console.log(res, 'xxxxx')
        })
      }
      return conf
    },
    handleHotUpdate(ctx) {
      ctx.server.config.logger.info(
        `\x1b[32m\mock访问地址: \x1b[0m \x1b[34m${mainServiceInfo?.serviceUrl}\x1b[0m`,
        {
          clear: false,
          timestamp: true,
        },
      )
    },
    closeBundle() {
      if (mainServiceInfo) {
        mainServiceInfo.serverClose()
        mainServiceInfo = null
      }
    },
  }
}
