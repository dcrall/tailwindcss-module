import { defineNuxtConfig } from 'nuxt3'
import tailwindModule from '../src/module'

export default defineNuxtConfig({
  // vite: false,
  buildModules: [
    tailwindModule
  ],
  tailwindcss: {
    configPath: '@ais-public/ais-components/tailwind.config.js',
    exposeConfig: true
  },
  vite: {
    logLevel: 'info'
  }
})
