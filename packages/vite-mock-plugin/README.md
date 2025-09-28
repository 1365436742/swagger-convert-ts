vite-plugin-proxy-mock 支持可视化mock能力

## 常见问题
```js
// ReferenceError: require is not defined
// import ProxyMockPlugin from 'vite-plugin-proxy-mock';
// 替换成
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const ProxyMockPlugin = require('vite-plugin-proxy-mock')
```
## 使用方式

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ProxyMockPlugin from 'vite-plugin-proxy-mock';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ProxyMockPlugin({
      port: 3001,
      // 生成代码的文件地址
      generatedCodeFileUrl: join(__dirname, './mockInfo/request-apis'),
      // mock文件的存储地址
      mockDataFileUrl: join(__dirname, './mockInfo/mock'),
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
```

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ProxyMockPlugin from 'vite-plugin-proxy-mock'
// sse mock https://www.npmjs.com/package/proxy-mock-core
/** 
 * urlPreciseMatching 参数是他为完全匹配
 * 例如：/getList?id=222
 * 会找这个完全相等的路径匹配出来，其他情况不匹配
 */
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ProxyMockPlugin({
      port: 3001,
      // 生成代码的文件地址
      generatedCodeFileUrl: path.join(__dirname, './mockInfo/request-apis'),
      // mock文件的存储地址
      mockDataFileUrl: path.join(__dirname, './mockInfo/mock'),
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5173',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
```
