# 代理核心功能

核心简介

- 主要用来启动服务
- 对接口进行匹配触发代理

```js
import mainService from 'proxy-mock-core';
import { ConfigOptions } from 'proxy-mock-core/dist/types/index';
import path from 'path';
const options: ConfigOptions = {
  port: 3001,
  // 生成axios 的文件地址
  generatedCodeFileUrl: path.join(__dirname, 'request-apis'),
  // 存储mock数据的地址
  mockDataFileUrl: path.join(__dirname, 'mock'),
};
const mainServiceInfo = mainService(this.options);
// 启动服务的地址
console.log(mainServiceInfo.serviceUrl)
const httpUrl = "/api/test"
// mock支持接受对象。这里是传入mock方法的值
const params = {}
const json = await mainServiceInfo.getMockInfo(httpUrl, "GET", params);
if(json){
  console.log("匹配成功",json);
}
```
```js
路径匹配方式
/**
 * 动态路由匹配
 * /prefix/:param1/:param2/suffix
 */
```
```js
SSE 流式输出
module.exports = async ({ req, res }) => {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.removeHeader('Content-Length')
  res.statusCode = 200
  let timeoutId
  // 页面刷新要进行关闭
  res.on('close', () => {
    timeoutId && clearInterval(timeoutId)
    if (!res.writableEnded) {
      res.end()
    }
  })
  // 自定义 JSON 内容
  const customData = [
    {
      userId: 'xxxx',
    },
    {
      userId: 'xxxx11222',
    },
  ]
  // 分段发送自定义 JSON 内容
  for (const data of customData) {
    res.write(`data: ${JSON.stringify(data)}\n\n`)
    await new Promise(resolve => {
      // 定时时间间隔
      timeoutId = setTimeout(resolve, 200)
    }) // 模拟延迟
  }
  return {}
}
```
