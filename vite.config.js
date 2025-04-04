import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? '/christmas-card/' : '/',
  build: {
    outDir: 'docs', // 使用 GitHub Pages默认识别目录
    assetsDir: 'static' // 静态资源子目录
  },
  assetsInclude: ['**/*.hdr', '**/*.glb'] // 如果这些文件放在Public下就不用配置
})
