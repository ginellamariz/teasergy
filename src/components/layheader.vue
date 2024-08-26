<template>
    <header class="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav class="container mx-auto px-6 py-3">
        <div class="flex justify-between items-center">
          <img src="~assets/images/Logo.png" alt="Teasergy Logo" class="h-12" />
          <div class="hidden md:flex space-x-4">
            <NuxtLink
              v-for="item in menuItems"
              :key="item.id"
              :to="{ path: '/', hash: `#${item.id}` }"
              class="text-kashmir font-karla hover:text-oslo"
              :class="{ 'font-bold': activeSection === item.id }"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
        </div>
      </nav>
    </header>
  </template>
  
  <script setup>
  const activeSection = ref('about')
  
  const menuItems = [
    { id: 'about', name: 'About Us' },
    { id: 'services', name: 'Services' },
    { id: 'why', name: 'Why Us' },
    { id: 'reviews', name: 'Reviews' },
    { id: 'contact', name: 'Contact' },
  ]
  
  onMounted(() => {
    spyScroll()
  })
  
  function spyScroll() {
    const sections = document.querySelectorAll('section')
    window.onscroll = () => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop
  
      for (let s in sections) {
        if (sections.hasOwnProperty(s) && sections[s].offsetTop <= scrollPos + 100) {
          const id = sections[s].id
          activeSection.value = id
        }
      }
    }
  }
  </script>