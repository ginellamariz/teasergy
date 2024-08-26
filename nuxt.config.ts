
// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';


export default defineNuxtConfig({

compatibilityDate: '2024-08-18',
  
  modules: [
    '@nuxtjs/tailwindcss', // Tailwind CSS module
    'vue3-carousel-nuxt',
    '@nuxt/image' ,
    '@vesp/nuxt-fontawesome',
    
  ],

  build: {
    transpile: ['vue3-carousel'], // Transpile for Vue 3 Carousel
  },
  devtools: { enabled: true },
  css: ['~/assets/tailwind.css', '@fortawesome/fontawesome-svg-core/styles.css'], // Ensure this path is correct

  // Set the source directory for your Nuxt app
  srcDir: 'src/',

  // Configure static asset handling
  nitro: {
    publicAssets: [
      {
        dir: 'public/images', // Ensure static assets are located here
        maxAge: 60 * 60 * 24 * 7 // Cache for 7 days
      }
    ]
  },

  /*image: {
    provider: 'static', // Use static provider
  },*/

  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/vue3-carousel.client.ts'
  ],
});