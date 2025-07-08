vue-cli-mock-plugin 支持可视化mock能力

# 插件
```bash
npm i vue-cli-mock-plugin -D 或
yarn add vue-cli-mock-plugin -D
```

```javascript
const { defineConfig } = require('@vue/cli-service')
const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true,
      },
    },
  },
  pluginOptions: {
    mockProxy: {
      port: 3001,
      // 生成代码的文件地址
      generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
      // mock文件的存储地址
      mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
    },
  },
})
```
