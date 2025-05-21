export interface ConfigOptions {
  /**
   * 端口
   * 默认3001
   */
  port?: number
  /**
   * axios、ts生成地址
   * 默认：request-apis
   */
  generatedCodeFileUrl?: string
  /**
   * mock数据文件地址
   * 默认：mock
   */
  mockDataFileUrl?: string
}
export interface ExtendConfigOption {
  /**
   * url精准匹配
   * /xxx/xxx?a.b
   * 会把？后面后进行全量匹配
   */
  urlPreciseMatching?: boolean
}
export interface MainServiceReturn {
  /**
   * 根据请求url、method。匹配是有相同的mock
   * 有相同的就返回、没匹配上就返回undefined
   * proxyParams 可以透传插件中的参数
   */
  getMockInfo: (url: string, method: string, proxyParams?: any) => any
  /**
   * 当前启动服务的url地址
   * 默认：http://localhost:3001
   */
  serviceUrl: string
  /**
   * 关闭服务
   */
  serverClose: () => void
}

export interface PackageJsonOptions {
  type?: string
}
