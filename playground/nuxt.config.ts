import { defineNuxtConfig } from 'nuxt3'
import tailwindModule from '../src/module'

export default defineNuxtConfig({
  // vite: false,
  buildModules: [
    tailwindModule
  ],
  css: [],
  tailwindcss: {
    configPath: '@ais-public/ais-components/tailwind.config.js',
    cssPath: '@ais-public/ais-components/src/css/tailwind.css',
    injectPosition: 0,
    exposeConfig: false,
    config: {
      content: [
        './node_modules/@ais-public/ais-components/src/**/*.{vue,js,ts,jsx,tsx}'
      ]
    }
  },
  vite: {
    logLevel: 'info'
  }
})
