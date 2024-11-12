import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // plugins: [react[include:'**/*.svg']],
  plugins: [react({
    include: '**/*.svg' // 改为使用对象的方式
  })],
  build: {
    outDir: 'dist',
    rollupOptions: {
      external:  ['use-sync-external-store/with-selector.js', 'redux', 'immer', 'use-memo-one', 'reselect', 'css-box-model']
  }
},
  server:{
    host:'0.0.0.0',
    port:5173,
  },

})