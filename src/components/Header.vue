<template>
  <header class="fixed w-full bg-white shadow-md transition-all duration-300" :class="{ 'bg-opacity-90': scrolled }">
    <nav class="container mx-auto px-24 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo with increased size -->
        <img src="~assets/images/Logo.png" alt="Teasergy Logo" class="h-14 md:h-14" />
        
        <div class="ml-auto flex items-center space-x-4">
          <!-- Navigation Links -->
          <div class="hidden md:flex space-x-12">
            <a v-for="item in menuItems" :key="item.id" :href="`#${item.id}`" class="text-kashmir font-karla hover:text-gray-800 text-2xl" :class="{ 'font-bold': activeSection === item.id }">
              {{ item.name }}
            </a>
          
          
          <!-- Contact Button -->
          <button @click="handleContactClick" class="hidden md:block bg-kashmir text-white text-lg font-karla py-2 px-4 rounded-lg hover:bg-opacity-80 transition duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </div>
    </nav>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: ['activeSection'],
  data() {
    return {
      scrolled: false,
      activeSection: 'about',
      menuItems: [
        { id: 'about', name: 'About Us' },
        { id: 'services', name: 'Services' },
        { id: 'why', name: 'Why Us' },
        { id: 'reviews', name: 'Reviews' }
        
      ],
      isVideoSectionVisible: false, // Track video section visibility
    }
  },
  onMounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.spyScroll();
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 0;
    },
    spyScroll() {
      const sections = document.querySelectorAll('section');
      const videoSection = document.getElementById('video-section'); // ID of the video section

      window.onscroll = () => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

        // Update active section
        for (let s in sections) {
          if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos + 100) {
            const id = sections[s].id;
            this.activeSection = id;
          }
        }

        // Check if the video section is visible
        if (videoSection) {
          const videoRect = videoSection.getBoundingClientRect();
          this.isVideoSectionVisible = videoRect.top < window.innerHeight && videoRect.bottom >= 0;
        }
      };
    },
    handleContactClick() {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
}
</script>

<style>
/* Add additional styling if needed */
</style>