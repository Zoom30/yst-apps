import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
// GITHUB PAGES: set VITE_BASE_PATH to your repo name, e.g. /yst-apps/
// Or update the base value below before deploying.
export default defineConfig({
  base: process.env.VITE_BASE_PATH ?? '/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
