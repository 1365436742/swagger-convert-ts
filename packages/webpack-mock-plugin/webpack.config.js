const path = require('path')
const ProxyMockPlugin = require('./dist/index.cjs')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
    compress: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './example/index.html', // 指定 HTML 模板文件
      filename: 'index.html', // 输出的 HTML 文件名
      inject: 'body', // 将脚本注入到 body 标签的底部
    }),
    new ProxyMockPlugin({
      port: 3001,
      generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
      mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
    }),
  ],
}
