import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import eslint from '@nabla/vite-plugin-eslint';
import * as path from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default defineConfig({
  plugins: [
    react(),
    eslint(),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(__dirname, 'src/assets/icons')],
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true,
        additionalData: `@import "@/assets/css/variables.less";`
      },
    },
  }
})
