import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react[include:'**/*.svg']],
  plugins: [react({
    include: '**/*.svg' // 改为使用对象的方式
  })],
  server:{
    host:'0.0.0.0',
    port:5173,
  }
})