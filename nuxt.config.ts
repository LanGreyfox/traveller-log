import { defineNuxtConfig } from "nuxt/config";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width, initial-scale=1.0',
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap' }
      ]
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ["@nuxt/content"]
})