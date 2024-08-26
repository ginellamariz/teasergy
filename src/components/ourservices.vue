
<template>
  <div class="container mx-auto px-6">
    <h2 class="h2-standard mb-10">Our Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <NuxtLink
        v-for="service in services"
        :key="service.name"
        :to="`/${service.name.toLowerCase().replace(/ /g, '-')}`" 
        class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500"
      >
        <img 
          :src="service.image"
          :alt="service.name"
          class="w-54 h-auto mb-4 rounded"
        />
        <h3 class="text-xl font-semibold mb-2 font-karla">{{ service.name }}</h3>
        <p class="text-gray-600">{{ service.description }}</p>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import electricalServicesTesting2 from '~/assets/images/electricalservices-testing2.png';
import electricalServicesTesting3 from '~/assets/images/electricalservices-testing3.png';

const services = [
  {
    name: 'Design and Installation',
    image: electricalServicesTesting2,
    description: 'We provide high-quality installation services for electrical systems.',
  },
  {
    name: 'Testing and Commissioning',
    image: electricalServicesTesting2,
    description: 'Thorough testing of systems to ensure reliability and safety.',
  },
  {
    name: 'Maintenance',
    image: electricalServicesTesting3,
    description: 'Expert commissioning services to validate system performance.',
  },
  {
    name: 'Other Services',
    image: electricalServicesTesting3,
    description: 'Expert commissioning services to validate system performance.',
  },
  
  
  ];

</script>
