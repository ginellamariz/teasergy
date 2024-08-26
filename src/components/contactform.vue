<template>
<div class="container mx-auto px-6">
    <h2 class="h2-standard">Got a project in mind? Let's talk 📞</h2>
    <form action="https://api.web3forms.com/submit" method="POST" class="max-w-lg mx-auto">
        <input type="hidden" name="access_key" value="d17be3eb-e06a-4fee-96d3-20fdf2192a14" />
        <div class="mb-4">
        <label for="name" class="block text-gray-700 font-bold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Your Name"
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Your Email"
        />
      </div>

      <div class="mb-4">
        <label for="message" class="block text-gray-700 font-bold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
          placeholder="Your Message"
        ></textarea>
      </div>

      <input type="hidden" name="redirect" value="https://web3forms.com/success" />

      <button
        type="submit"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300"
      >
        Send Message
      </button>
    </form>
  </div>
</template>


<script>
 import contactform from '~/components/contactform.vue'
 
</script>