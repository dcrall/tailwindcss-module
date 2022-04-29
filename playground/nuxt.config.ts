import { defineNuxtConfig } from 'nuxt3'
import tailwindModule from '../src/module'

export default defineNuxtConfig({
  // vite: false,
  buildModules: [
    tailwindModule
  ],
  css: ['@ais-public/ais-components/styles/uids-fonts.css'],
  tailwindcss: {
    configPath: '@ais-public/ais-components/tailwind.config.js',
    cssPath: '@ais-public/ais-components/tailwind.css',
    injectPosition: 0,
    exposeConfig: true
  },
  vite: {
    logLevel: 'info'
  }
})
