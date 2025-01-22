import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import devServicePlugin from './vite-dev.service'
// https://vite.dev/config/
export default defineConfig({
  base: '/public',
  plugins: [react(), devServicePlugin()],
  build: {
    chunkSizeWarningLimit: 600,
    outDir: 'dist/public',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id
              .toString()
              .split('node_modules/')[1]
              .split('/')[0]
              .toString()
          }
        },
      },
    },
  },
})
