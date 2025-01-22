## 使用方式

```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import ProxyMockPlugin from 'vite-plugin-proxy-mock'
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
