import { Compiler } from 'webpack';
import { OnProxyReqCallback, ProxyMockPluginOptions } from './types';
import mainService from 'proxy-mock-core';
import { ConfigOptions } from 'proxy-mock-core/dist/types/index';
import path from 'path';
const DefaultOption: ConfigOptions = {
  port: 3001,
  generatedCodeFileUrl: path.join(__dirname, 'request-apis'),
  mockDataFileUrl: path.join(__dirname, 'mock'),
};
class ProxyMockPlugin {
  options: ConfigOptions;
  serviceUrl?: string;
  constructor(options: ProxyMockPluginOptions = {}) {
    // 接受用户传入的选项
    this.options = Object.assign(DefaultOption, options); // 默认端口为8081
  }

  apply(compiler: Compiler) {
    compiler.hooks.done.tap('ProxyMockPlugin', () => {
      setImmediate(() => {
        if (!this.serviceUrl) return;
        console.log(
          `\x1b[32m\mock访问地址: \x1b[0m \x1b[34m${this.serviceUrl}\x1b[0m`
        );
      });
    });
    // 在 Webpack 的环境准备好后进行拦截
    compiler.hooks.environment.tap('ProxyMockPlugin', () => {
      const devServer = compiler.options.devServer;
      if (devServer && devServer.proxy) {
        // 获取代理配置
        const proxy = devServer.proxy;
        const mainServiceInfo = mainService(this.options);
        this.serviceUrl = mainServiceInfo.serviceUrl;
        const that = this;
        // 遍历代理配置，添加中间件
        Object.keys(proxy).forEach((context) => {
          const oldOnProxyReq = proxy[context]?.onProxyReq;
          const onProxyReq: OnProxyReqCallback = async (...params) => {
            oldOnProxyReq?.(...params);
            const [_proxyReq, req, res] = params;
            const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
            const { pathname } = new URL(fullUrl);
            const json = await mainServiceInfo.getMockInfo(
              pathname,
              req.method,
              params
            );
            if (json) {
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify(json));
            }
          };
          if (typeof context === 'string') {
            // 如果是字符串形式的代理配置
            proxy[context] = {
              ...proxy[context],
              onProxyReq,
            };
          } else {
            // 如果是对象形式的代理配置
            proxy[context].onProxyReq = onProxyReq;
          }
        });
      }
    });
  }
}

export default ProxyMockPlugin;
