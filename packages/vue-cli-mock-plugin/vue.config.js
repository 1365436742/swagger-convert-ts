const { defineConfig } = require('@vue/cli-service')
const path = require('path')
// vue invoke mock-proxy
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8081',
        changeOrigin: true
      }
    },
  },
  pluginOptions: {
    mockProxy: {
      port: 3001,
      // 生成代码的文件地址
      generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
      // mock文件的存储地址
      mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
    }
  },
})
