const path = require('path')
const mainService = require('proxy-mock-core')
const DefaultOption = {
  port: 3001,
  generatedCodeFileUrl: path.join(__dirname, 'request-apis'),
  mockDataFileUrl: path.join(__dirname, 'mock'),
}
module.exports = (api, projectOptions) => {
  const options = Object.assign(DefaultOption, (projectOptions.pluginOptions?.mockProxy || {}))
  let mainServiceInfo
  let timer

  const debounceConsole = () => {
    const fn = () => {
      timer = setTimeout(() => {
        timer = null
        if (!mainServiceInfo.serviceUrl) return
        console.log(
          `\x1b[32m\mock访问地址: \x1b[0m \x1b[34m${mainServiceInfo.serviceUrl}\x1b[0m`,
        )
      }, 500)
    }
    if (timer) {
      clearTimeout(timer)
      fn()
    } else {
      fn()
    }
  }
  const { serve } = api.service.commands

  const serveFn = serve.fn

  serve.fn = (...args) => {
    return serveFn(...args).then(res => {
      if (res && res.url) {
        if (mainServiceInfo) {
          debounceConsole()
        }
      }
    })
  }
  // 修改devServer配置
  api.configureDevServer(app => {
    if (projectOptions?.devServer?.proxy) {
      mainService.default(options).then(_mainServiceInfo => {
        mainServiceInfo = _mainServiceInfo
      })
      app.use(async (req, res, next) => {
        if (mainServiceInfo) {
          debounceConsole()
          const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`
          let { pathname } = new URL(fullUrl)
          if (options.urlPreciseMatching) {
            pathname = req.originalUrl
          }
          const json = await mainServiceInfo?.getMockInfo(
            pathname,
            req.method || '',
            { req, res },
          )
          if (
            json &&
            res.getHeader('Content-Type') !== 'text/event-stream'
          ) {
            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.send(json)
          } else {
            next()
          }
        } else {
          next()
        }
      })
    }
  })
}
