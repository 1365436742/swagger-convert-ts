const path = require('path');
const ProxyMockPlugin = require('./dist/index.cjs.js');

module.exports = {
  entry: './example/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'wb_dist')
  },
  devServer: {
    hot: true,
    proxy: [
      {
        context: ['/appfactory'],
        target: 'https://chengzifeng-fdphz-sl-friday.ai.test.sankuai.com',
        changeOrigin: true,
        pathRewrite: { '^/appfactory': '' }
      }
    ]
  },
  plugins: [
    new ProxyMockPlugin({
      savePath: path.resolve(__dirname, './example')
    })
  ]
};
