<template>
    <div class="container mx-auto py-8">
            <h2 class="h2-standard">Our happy clients</h2>
      <div class="flex flex-wrap justify-center items-center gap-8">
        <div v-for="(logo, index) in logos" :key="index" class="w-32 h-16 flex items-center justify-center">
          <img :src="logo.src" :alt="logo.name" class="max-w-full max-h-full object-contain hover:opacity-75 transition-opacity duration-300">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>

   import lpuLogo from '~/assets/images/logo/lpu-logo.png';
   import kinpoLogo from '~/assets/images/logo/kinpo-logo.png';
   import ictsLogo from '~/assets/images/logo/icts-logo.png';
   import shangLogo from '~/assets/images/logo/shang-logo.webp';
   import wgroupLogo from '~/assets/images/logo/wgroup-logo.webp';

  const logos = [
    { name: 'lpu', src: lpuLogo },
    { name: 'kinpo', src: kinpoLogo },
    { name: 'icts', src: ictsLogo },
    { name: 'shang', src: shangLogo },
    { name: 'wgroup', src: wgroupLogo },
    
  ];
  </script>