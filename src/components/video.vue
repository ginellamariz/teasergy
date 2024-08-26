<template>
  <section id="video-section" class="video-section mt-30">
    <video 
      src='~assets/images/electricalservices-video.mp4'
      loop 
      autoplay 
      muted 
      playsinline
    >
      Your browser does not support the video tag.
    </video>
  </section>
</template>
  
<script setup>
// No need to define src in the script if it's a static path
</script>

<style scoped>
.video-section {
  position: relative;
  width: 100%;
  height: 100vh; /* Full viewport height */
  overflow: hidden;
}

video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: 30%;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
}
</style>

