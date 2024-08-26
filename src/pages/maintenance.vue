<template>
  <div class="bg-gradient-to-r from-black h-96 w-full relative">
    <img src="~/assets/images/maintendanceHeader.png" alt="installation-substation" class="w-full h-full object-cover absolute mix-blend-overlay"/>
    <div class="p-24">
      <h1 class="h1-standard mt-12">Expert in Electrical Maintenance</h1>
      <h2 class="font-inter text-balance text-center text-white">
        Teasergy's manpower has more than 31 years of experience in wide range Electrical Maintenance.
        <br> We see to it that Electrical Equipment is still within the criteria of standard such as NETA, ATS, IEC, IEEE etc.
      </h2>
    </div>
  </div>

  <div class="container mx-auto px-4 py-8">
    <h2 class="h2-standard mt-2 mb-12">We perform high-quality testing of instrument with different scope of work.</h2>

    <!-- First Private Pole Maintenance Section -->
    <div class="flex flex-col md:flex-row mb-16">
      <div class="md:w-1/2 pr-8">
        <img src="~/assets/images/poleMaintenance.png" alt="Worker at substation" class="object-size-down rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h3 class="h3-pages">First Private Pole Maintenance</h3>
        <p class="font-inter text-justify text-lg mb-4">
          We thoroughly clean and check the conductors, insulators, disconnection switch and its other components. 
          Through the initial test of our Thermal scanning and Ultrasonic Detection devices we make sure that we can 
          have an initial prediction of this component before the shutdown.
          We make sure that if there are components that need to be replaced we turnover the test results with our client ahead of Time. 
        </p>
      </div>
    </div>

    <!-- Low Voltage Switchgear Section -->
    <div class="flex flex-col md:flex-row-reverse mb-16">
      <div class="md:w-1/2 pl-8">
        <img src="~/assets/images/low-voltage-switchgear.png" alt="Low Voltage Switchgear" class="object-size-down rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h3 class="h3-pages">Low Voltage Switchgear</h3>
        <p class="font-inter text-justify text-lg mb-4">
          As part of Teasergy expertise we enchantedly Test the breaker through Insulation Resistance, Contact Resistance and Electronic trip unit of each on the breaker.
        </p>
      </div>
    </div>

    <!-- Medium Voltage Switchgear Section -->
    <div class="flex flex-col md:flex-row mb-16">
      <div class="md:w-1/2 pr-8">
        <img src="~/assets/images/mediumVoltage.png" alt="Medium Voltage Switchgear" class="w-full h-auto rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h3 class="h3-pages">Medium Voltage Switchgear</h3>
        <p class="font-inter text-justify text-lg mb-4">
          As part of our maintenance, our team is expert in maintaining different components of the Medium Voltage Switchgear (MVSG) together with its different types. We access the MVGS with the different testing such as:
          Insulation Resistance Testing, Contact Resistance Testing, Contact Timing Testing Circuit Breaker Failure Testing, Simulation Test, Manual and Automatic Trip Test, SF6 Gas Analysis, Moisture Analysis, Residual Testing, Vacuum Bottle Analysis, Earth Grounding Test Etc.
          We aim to thoroughly access and analyze each component of the MVSG of its health with sufficient electrical status.
        </p>
      </div>
    </div>

  
    <div class="flex flex-col md:flex-row-reverse mb-16">
      <div class="md:w-1/2 pl-8">
        <img src="~/assets/images/protectionRelay.jpg" alt="Protection Relay" class="object-size-down rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h3 class="h3-pages">Protection Relay</h3>
        <p class="font-inter text-justify text-lg mb-4">
          We dare to compute and design your coordination protection study base on the system analysis of your equipment.
          We Calibrate, Program, Re-settings your protection relay base on your standard. 
          We make to thoroughly have a simulation testing and conduct re-configuration as needed as possible.
        </p>
      </div>
    </div>

    <div class="flex flex-col md:flex-row mb-16">
      <div class="md:w-1/2 pr-8">z
        <img src="~/assets/images/transformerMaintenance.jpg" alt="transformer-maintenance" class="object-size-down rounded-lg shadow-lg">
      </div>
      <div class="md:w-1/2 mt-8 md:mt-0">
        <h3 class="h3-pages">Transformer Maintenance</h3>
        <ul class="list-disc text-xl font-inter pl-5 mb-4">
          <li>Teasergy do Preventive Maintenance of  Transformers Oil and Dry Type</li>
          <li>Degasification/ Purification of Power Transformer at its maximum number of cycles</li>
          <li>Repair of Oil Leak of the Transformer and Bushing repair</li>
          <li>Change Oil of Power Transformer</li>
          <li>Reconditioning and Re-winding of Transformer</li>
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