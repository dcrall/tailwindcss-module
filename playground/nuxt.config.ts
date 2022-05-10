import { defineNuxtConfig } from 'nuxt3'
import tailwindModule from '../src/module'

export default defineNuxtConfig({
  // vite: false,
  buildModules: [
    tailwindModule
  ],
  css: [],
  tailwindcss: {
    configPath: '@dcrall/tw-test/tailwind.config.js',
    cssPath: '~/assets/tailwind.css',
    exposeConfig: true
  },
  vite: {
    logLevel: 'info'
  }
})
