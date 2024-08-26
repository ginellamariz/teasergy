<template>
  <div class="bg-gradient-to-r from-black h-96 w-full relative">
    <img src="~/assets/images/testingHeader.png" alt="testing" class="w-full h-full object-cover absolute mix-blend-overlay"/>
    <div class="p-24">
      <h1 class="h1-standard mt-12">Expert in Testing and Commissioning</h1>
    
    
      </div>


     </div>
    
  </template>
  
  
  
  <script setup lang="ts">
  
  
  const route = useRoute()
  const serviceName = route.params.serviceName
  
  definePageMeta({
  layout: 'layservices'
  });
  
  </script>