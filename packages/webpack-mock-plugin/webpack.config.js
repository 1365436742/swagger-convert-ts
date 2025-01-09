const path = require('path');
const ProxyMockPlugin = require('./dist/index.cjs.js');
module.exports = {
  mode: 'development',
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wb_dist')
  },
  devServer: {
    hot: true,
    proxy: [
      {
        context: ['/api'],
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      }
    ]
  },
  plugins: [
    new ProxyMockPlugin({
      port: 3001,
      generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
      mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
    })
  ]
};
