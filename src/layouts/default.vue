<template>
  <div class="flex flex-col min-h-screen">
    <VideoSection />
    <Header />
    <main class="flex-grow">
    <NuxtPage  /> 
    <Footer />
  </main>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import VideoSection from '~/components/video.vue';
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header, 
    VideoSection,
    Footer
  } 
}
</script>