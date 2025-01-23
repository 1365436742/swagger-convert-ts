## 使用说明

webpack-proxy-mock-plugin 支持可视化mock能力

```js
const path = require('path')
const ProxyMockPlugin = require('webpack-proxy-mock-plugin')
module.exports = {
  mode: 'development',
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wb_dist'),
  },
  devServer: {
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    ],
  },
  plugins: [
    new ProxyMockPlugin({
      port: 3001,
      // 生成代码的文件地址
      generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
      // mock文件的存储地址
      mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
    }),
  ],
}
```
