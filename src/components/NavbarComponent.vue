<template>
  <nav class="bg-gradient-to-r from-blue-500 to-teal-500 shadow-lg">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <router-link to="/" class="text-white font-bold text-2xl no-underline">
        CONTACT BOOK
      </router-link>

      <button
        class="block lg:hidden text-white"
        type="button"
        aria-label="Toggle navigation"
        @click="isOpen = !isOpen"
      >
        <svg
          v-if="!isOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
        <svg
          v-if="isOpen"
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>

      <div class="lg:flex hidden space-x-6 text-white text-lg font-medium">
        <router-link to="/" class="hover:text-black no-underline">HOME</router-link>
        <router-link to="/add-contact" class="hover:text-black no-underline">ADD CONTACT</router-link>
      </div>
    </div>


    <div :class="isOpen ? 'translate-x-0' : 'translate-x-full'" class="lg:hidden fixed inset-y-0 right-0 z-40 transition-transform duration-300 ease-in-out">
      <div class="flex justify-end p-6">
        <button @click="isOpen = false" class="text-white">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>
      <div class="flex flex-col items-start bg-gradient-to-b from-teal-500 to-teal-500  text-white py-8 space-y-6 px-4 w-64 h-full">
        <router-link to="/" class="hover:text-black no-underline text-xl" @click="isOpen = false">HOME</router-link>
        <router-link to="/add-contact" class="hover:text-black no-underline text-xl" @click="isOpen = false">ADD CONTACT</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style scoped>
a {
  color:white;
  text-decoration: none;
}
</style>
