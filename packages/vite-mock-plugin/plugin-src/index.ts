// vite-plugin-full.ts
import type { Plugin, UserConfig, ConfigEnv, ResolvedConfig } from 'vite'
import mainService from 'proxy-mock-core'
import {
  ConfigOptions,
  MainServiceReturn,
} from 'proxy-mock-core/dist/types/index'
import path from 'path'
import { IncomingMessage } from 'http'
const DefaultOption: ConfigOptions = {
  port: 3001,
  generatedCodeFileUrl: path.join(__dirname, 'request-apis'),
  mockDataFileUrl: path.join(__dirname, 'mock'),
}
let mainServiceInfo: MainServiceReturn | null = null
export default function ProxyMockPlugin(options: ConfigOptions = {}): Plugin {
  return {
    name: 'vite-plugin-proxy-mock',
    // 配置
    config(conf: UserConfig, env: ConfigEnv) {
      if (conf.server?.proxy && env.command === 'serve') {
        if (!mainServiceInfo) {
          mainServiceInfo = mainService(Object.assign(DefaultOption, options))
        }
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
                  (proxyRes, req: IncomingMessage & any, res) => {
                    var body: any[] = []
                    proxyRes.on('data', function (chunk: any) {
                      body.push(chunk)
                    })
                    proxyRes.on('end', async () => {
                      if (!mainServiceInfo) {
                        res.end(Buffer.concat(body).toString())
                        return
                      }
                      const url = req.originalUrl || req.url || ''
                      const pathname = url.split('?')[0]
                      const json = await mainServiceInfo.getMockInfo(
                        pathname,
                        req.method || '',
                        { proxyRes, req, res },
                      )
                      if (!json) {
                        res.end(Buffer.concat(body).toString())
                      } else {
                        res.setHeader('Content-Type', 'application/json')
                        res.writeHead(200)
                        res.end(JSON.stringify(json))
                      }
                    })
                  },
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
  }
}
