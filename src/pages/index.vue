  <template>
    <Header :activeSection="activeSection" />
    <main>
      <section id="about" class="py-20 bg-kashmir">
    <div class="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-6 md:mb-0">
        <h1 class="h1-standard">About Us</h1>
        <p class="text-bluewood text-600 text-left max-w-2xl">
          TEASERGY is an Electrical Engineering services provider company composed of experienced and competent new-generation engineers and technicians. We specialize in providing the safest, reliable, high-quality and high-standard Installation, Testing, Commissioning and Maintenance services on a wide range of Electrical Systems and Equipment.
        </p>
      </div>
      <div class="md:w-1/2">
        <img src="~assets/images/about.png" alt="Electrical Services"
        class=" fixed-image rounded-full">
      </div>
    </div>
  </section>



<section id="services" class="py-24  bg-gray-100">
  <ourservices />
</section>

<section id= "why" class="py-24 bg-white">
    <div class="container mx-auto px-6">
      <div class="text-center mb-12">
        <h2 class="h2-standard mb-10">The Choice That Makes Sense</h2>
        <div class="text-blue-500 text-5xl mb-8">⚡</div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div v-for="feature in features" :key="feature.title" class="text-center p-6 border rounded-lg">
          <div class="text-blue-500 text-4xl mb-4">
            <font-awesome-icon :icon="feature.icon" />
          </div>
          <h3 class="text-lg font-semibold">{{ feature.title }}</h3>
        </div>
      </div>
    </div>
</section>


  <section id="reviews" class="py-20 bg-white">
    <client />

  </section>


      
      <section id="contact" class="py-24 bg-gothic">
      <contactform />
      </section>



  </main>
</template>

<script setup>
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  import ourservices from '~/components/ourservices.vue'
  import contactform from '~/components/contactform.vue'
  import client from '~/components/client.vue'
  

  const menuItems = ref([
    { id: 'video', name: 'Video' },
    { id: 'about', name: 'About Us' },
    { id: 'services', name: 'Services' },
    { id: 'why', name: 'Why Us' },
    { id: 'contact', name: 'Contact' }

])
  

const features = [
  { icon: ['fas', 'hourglass-half'], title: 'Fast Approach Solutions' },
  { icon: ['fas', 'file-alt'], title: 'Licensed Engineer & Electricians' },
  { icon: ['fas', 'check-circle'], title: 'Experienced and Accessible' },
  { icon: ['fas', 'face-smile'], title: 'Excellent Customer Service' },
  
]
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    spyScroll()
  })
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    const scrollPosition = window.scrollY
    const headerHeight = 80 // Adjust this value to match your header height
    scrolled.value = scrollPosition > headerHeight
  }
  
  const spyScroll = () => {
    const sections = document.querySelectorAll('section')
    window.onscroll = () => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
  
      sections.forEach(section => {
        if (section.offsetTop <= scrollPos + 100 && section.offsetTop + section.offsetHeight > scrollPos) {
          activeSection.value = section.id
        }
      })
    }
  }
  
  definePageMeta({
  layout: 'default' // Uses the default layout
});

</script>
  
  <style>
  
  html {
    scroll-behavior: smooth;
  }

  
  </style>