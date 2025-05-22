// vite-plugin-full.ts
import type { Plugin, UserConfig, ConfigEnv } from 'vite'
import mainService, { responseInterceptor } from 'proxy-mock-core'
import {
  ConfigOptions,
  MainServiceReturn,
  ExtendConfigOption,
} from 'proxy-mock-core/dist/types/index'
import path from 'path'
import { parse } from 'qs'
const DefaultOption: ConfigOptions = {
  port: 3001,
  generatedCodeFileUrl: path.join(__dirname, 'request-apis'),
  mockDataFileUrl: path.join(__dirname, 'mock'),
}
let mainServiceInfo: MainServiceReturn | null = null
export default function ProxyMockPlugin(
  options: ConfigOptions & ExtendConfigOption = {},
): Plugin {
  return {
    name: 'vite-plugin-proxy-mock',
    // 配置
    async config(conf: UserConfig, env: ConfigEnv) {
      if (conf.server?.proxy && env.command === 'serve') {
        mainServiceInfo = await mainService(
          Object.assign(DefaultOption, options),
        )
        for (const key in conf.server?.proxy) {
          const proxItem = conf.server?.proxy[key]
          if (typeof proxItem === 'object') {
            const oldConfigure = proxItem.configure
            conf.server.proxy[key] = {
              ...proxItem,
              selfHandleResponse: true,
              configure(...params) {
                oldConfigure?.(...params)
                const [proxy] = params
                proxy.on(
                  'proxyRes',
                  responseInterceptor(
                    //@ts-ignore
                    async (responseBuffer, proxyRes, req, res) => {
                      if (!mainServiceInfo) {
                        return responseBuffer
                      }
                      //@ts-ignore
                      const url = req.originalUrl || req.url || ''
                      const splitUrl = url.split('?')
                      let pathname = splitUrl[0]
                      //@ts-ignore
                      req.query = parse(splitUrl[1])
                      if (options.urlPreciseMatching) {
                        pathname = url
                      }
                      const json = await mainServiceInfo?.getMockInfo(
                        pathname,
                        req.method || '',
                        { proxyRes, req, res },
                      )
                      if (
                        json &&
                        res.getHeader('Content-Type') !== 'text/event-stream'
                      ) {
                        res.statusCode = 200
                        res.setHeader('Content-Type', 'application/json')
                        return JSON.stringify(json)
                      }

                      return responseBuffer
                    },
                  ),
                )
              },
            }
          }
        }
      }
      return {
        ...conf,
        // 添加配置
      }
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
