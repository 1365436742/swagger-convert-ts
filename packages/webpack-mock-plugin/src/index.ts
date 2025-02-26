import { Compiler } from 'webpack'
import mainService, { responseInterceptor } from 'proxy-mock-core'
import {
  ConfigOptions,
  MainServiceReturn,
} from 'proxy-mock-core/dist/types/index'
import path from 'path'

const DefaultOption: ConfigOptions = {
  port: 3001,
  generatedCodeFileUrl: path.join(__dirname, 'request-apis'),
  mockDataFileUrl: path.join(__dirname, 'mock'),
}
class ProxyMockPlugin {
  options: ConfigOptions
  serviceUrl?: string
  mainServiceInfo?: MainServiceReturn
  constructor(options: ConfigOptions = {}) {
    // 接受用户传入的选项
    this.options = Object.assign(DefaultOption, options) // 默认端口为8081
  }

  apply(compiler: Compiler) {
    compiler.hooks.done.tap('ProxyMockPlugin', () => {
      setImmediate(() => {
        if (!this.serviceUrl) return
        console.log(
          `\x1b[32m\mock访问地址: \x1b[0m \x1b[34m${this.serviceUrl}\x1b[0m`,
        )
      })
    })
    // 在 Webpack 的环境准备好后进行拦截
    compiler.hooks.environment.tap('ProxyMockPlugin', async () => {
      const devServer = compiler.options.devServer
      if (devServer && devServer.proxy) {
        // 获取代理配置
        const proxy = devServer.proxy
        mainService(this.options).then(mainServiceInfo => {
          this.mainServiceInfo = mainServiceInfo
          this.serviceUrl = mainServiceInfo.serviceUrl
        })
        // 遍历代理配置，添加中间件
        Object.keys(proxy).forEach(context => {
          const oldOnProxyRes = proxy[context]?.onProxyRes
          const onProxyRes = responseInterceptor(
            async (responseBuffer, proxyRes, req, res) => {
              oldOnProxyRes?.(proxyRes, req, res)
              if (!this.mainServiceInfo) {
                return responseBuffer
              }
              //@ts-ignore
              const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
              const { pathname } = new URL(fullUrl)
              const json = await this.mainServiceInfo?.getMockInfo(
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
          )
          if (typeof context === 'string') {
            // 如果是字符串形式的代理配置
            proxy[context] = {
              ...proxy[context],
              selfHandleResponse: true,
              onProxyRes,
            }
          } else {
            proxy[context].selfHandleResponse = true
            // 如果是对象形式的代理配置
            proxy[context].onProxyRes = onProxyRes
          }
        })
      }
    })
  }
}

export default ProxyMockPlugin
