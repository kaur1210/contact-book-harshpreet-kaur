<template>
  <div class="flex flex-col">
    <div class="flex-grow">
      <slot></slot>
    </div>

    <footer class="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-4 mt-auto">
      <div class="container mx-auto text-center">
        <p class="text-sm lg:text-base tracking-wide">
          &copy; {{ new Date().getFullYear() }} Contact Book. All Rights Reserved.
        </p>
        <p class="text-xs mt-2 lg:mt-0 lg:text-sm">
          Designed with ❤️ using Tailwind CSS
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
</style>
