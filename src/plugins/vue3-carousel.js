// plugins/vue3-carousel.js

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default defineNuxtPlugin((nuxtApp) => {
  // Registering the carousel components globally
  nuxtApp.vueApp.component('Carousel', Carousel);
  nuxtApp.vueApp.component('Slide', Slide);
  nuxtApp.vueApp.component('Pagination', Pagination);
  nuxtApp.vueApp.component('Navigation', Navigation);
});
