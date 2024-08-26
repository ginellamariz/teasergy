<template>
    <section class="py-20">
      <!-- Main heading for the section -->
      <div class="container mx-auto px-6 mb-10">
        <h1 class="h1-standard">Other Services</h1>
    
      </div>
  
      <!-- Layout container with flex to handle left and right content -->
      <div class="container mx-auto flex flex-nowwrap ">
        <!-- Left side for the list -->
        <div class="w-full md:w-2/3">
          <ol class="list-decimal text-2xl space-y-6 pl-12">
            <li>
              <h3 class="h3-pages">Mechanical Services</h3>
              <ul class="list-disc ml-6 mt-4 text-xl">
                <li>Rewinding of Motors and Alternators</li>
                <li>Preventive Maintenance of Building Generators</li>
                <li>FDAS</li>
                <li>Fire Pro and Fire Pumps</li>
              </ul>
            </li>
            <li>
              <h3 class="h3-pages">Key Services</h3>
              <ul class="list-disc ml-6 mt-4 text-xl">
                <li>Rewinding of Motors and Alternators</li>
                <li>Preventive Maintenance of Building Generators</li>
                <li>FDAS</li>
                <li>Fire Pro and Fire Pumps</li>
                </ul>
            </li>
            <li>
              <h3 class="h3-pages">Solar Services</h3>
              <ul class="list-disc ml-6 mt-4 text-xl">
                <li>Engineering, Procurement, and Construction (EPC) Contracts 
                <br> C&I and Utility Scale RE Projects 
                </li>
                <li>Tailored Solutions and Turnkey Installation Services for Commercial Industrial, 
                    <br>and Utility Applications</li>
                <li>Operation, Maintendance, and Support Contracts/ Service Level Agreements</li>
                <li>Renewable Energy Integration (Solar-BESS-EV Systems)</li>
                <li>Condition Monitoring and Preventive Maintenance</li>
                </ul>
            </li>
            
          </ol>
        </div>
        </div>
      

      </section>
  </template>
  
  
  
  <script setup lang="ts">
  
  
  const route = useRoute()
  const serviceName = route.params.serviceName
  
  definePageMeta({
  layout: 'layservices'
  });
  
  </script>