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