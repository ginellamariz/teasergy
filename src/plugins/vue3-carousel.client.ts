import { defineNuxtPlugin } from '#app';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('Carousel', Carousel)
  nuxtApp.vueApp.component('Slide', Slide)
  nuxtApp.vueApp.component('Pagination', Pagination)
  nuxtApp.vueApp.component('Navigation', Navigation)
})
