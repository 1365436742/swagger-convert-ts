import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
//@ts-ignore
import ProxyMockPlugin from "./dist/index.esm.js";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    ProxyMockPlugin({
      port: 3001,
      generatedCodeFileUrl: path.join(__dirname, "./mockInfo/request-apis"),
      mockDataFileUrl: path.join(__dirname, "./mockInfo/mock"),
    }),
  ],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5173",
        changeOrigin: true,
        
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
