<template>
    <div class="bg-gradient-to-r from-black h-96 w-full relative">
      <img src="~/assets/images/installationHeader.png" alt="installation-substation" class="w-full h-full object-cover absolute mix-blend-overlay"/>
      <div class="p-24">
      <h1 class="h1-standard mt-12">Expert in Design and Installation</h1>
    <h2 class="font-inter text-balance text-center text-white">
    We provide well-trained manpower with different specializations in Electrical Engineering. Together with their profound training and professional certificates and licensure, 
    we make sure that the Electrical installation corresponds with the Philippine Electrical Code Standard.</h2>
      </div>
    </div>
    <div class="container mx-auto px-4 py-8">
    <div class="flex flex-col md:flex-row mb-16">
      <div class="md:w-1/2 pr-8">
        <img src="~/assets/images/substationworker.png" alt="Substation" class="object-size-down rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h3 class="h3-pages">Electrical Installation of Substation</h3>
        <p class="font-inter text-justify text-lg mb-4">
          The electrical installation of substation is a widen skill of the company which Teasergy is knowledgeable in executing the following scope of work:
           </p>
           <ul class="list-disc text-xl font-inter pl-5 mb-4">
            <li>Positioning of equipment</li>
            <li>Electrical Termination of XLPE and other cables</li>
            <li>Design of conduit system</li>
            <li>Design and Installation AC power system</li>
            <li>Installation of DC system</li>
            <li>Installation of Grounding</li>
            <li>Installation of relay protection and wiring diagrams</li>
            <li>Relay Racks and Panel</li>
            <li>Fiber optic wiring</li>
          </ul>
      </div>
    </div>
        
  
    
    <div class="flex flex-col md:flex-row-reverse mb-16">
      <div class="md:w-1/2 pr-8">
          <img src="~/assets/images/substation.webp" alt="Worker at substation" class="object-size-down rounded-lg">
        </div>
        <div class="md:w-1/2 mt-8 md:mt-0">
          <h3 class="h3-pages">Voltage Ranges</h3>
          <p class="text-2xl mb-4">
            Teasergy provides installation of Electrical Substation in accordance to the reliable design for the following voltage ranges:
          </p>
          <ul class="list-disc text-2xl font-karla pl-5 mb-4">
            <li>230/69 kV</li>
            <li>115/34.5 kV</li>
            <li>69/13.8 kV</li>
            <li>34.5/6.28 kV</li>
          </ul>
        </div>
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
