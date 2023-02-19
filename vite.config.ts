import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  //  @ is an alias to /src
  //  @/components/* -> src/components/*
  resolve : {
    alias: {
      '@/': `${path.resolve(__dirname, 'src')}/`,
      '@components': `${path.resolve(__dirname, 'src/components')}/`,
      '@store': `${path.resolve(__dirname, 'src/store')}/`,
      '@types': `${path.resolve(__dirname, 'src/types')}/`,
      
    }
  },
  plugins: [vue()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
  

})
