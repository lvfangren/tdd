import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: ['test/setup.js'],

  },
  plugins: [vue()],
})