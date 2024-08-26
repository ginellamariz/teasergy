
<template>
  <div>
    <layheader /> <!-- Header component -->
    <main>
      <NuxtPage /> <!-- Page content is injected here -->
    </main>
    <FooterServices /> 
  </div>
</template>


<script setup>
import layheader from '~/components/layheader.vue'
import Footer from '~/components/FooterServices.vue'
</script>
