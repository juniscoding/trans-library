// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  app: {
    head: {
      title: 'The Trans Library', // default fallback title
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxthub/core'],
  css: ['~/assets/css/main.css'],
  vite: {    plugins: [      tailwindcss(),    ],  },
  hub: {
    database: true
  }
})