<template>
  <div class="max-w-5xl mx-auto py-10 px-4">
    <div class="text-center mb-8">
      <h1 class="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500 hover:from-teal-500 hover:to-blue-500 transition duration-300">
  CONTACT BOOK 
</h1>

    </div>

    <div class="text-center mb-6" v-if="!isLoading">
      <p class="text-xl text-gray-300">
        Total Contacts: <span class="font-semibold text-grey-300">{{ totalContacts }}</span>
      </p>
    </div>

    <div class="mb-8 shadow-lg">
      <input
        v-model="search"
        type="text"
        placeholder="Search contacts..."
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
    </div>

    <div v-if="isLoading" class="flex justify-center items-center">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
    </div>

    <div v-if="!isLoading && filteredContacts.length" class="divide-y divide-gray-200 shadow-lg rounded-lg">
      <button
        v-for="contact in filteredContacts"
        :key="contact.id"
        @click="navigateToContact(contact.id)"
        class="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition duration-300"
      >
        <span class="font-semibold text-gray-900">
          {{ contact.firstName }} {{ contact.lastName }}
        </span>
    
      </button>
    </div>

    <div v-else-if="!isLoading" class="text-center text-gray-500">
      <p class="text-lg mt-6">No contacts found.</p>
    </div>
  </div>
</template>

<script>
import { GetAllContacts } from "../localstorage/localStorage.js";

export default {
  data() {
    return {
      search: "",
      contacts: [],
      isLoading: true, 
    };
  },
  computed: {
    filteredContacts() {
      return this.contacts
        .filter((contact) =>
          `${contact.firstName} ${contact.lastName}`.toLowerCase().includes(this.search.toLowerCase())
        )
        .sort((a, b) => a.lastName.localeCompare(b.lastName));
    },
    totalContacts() {
      return this.contacts.length;
    },
  },
  created() {
    setTimeout(() => {
      this.contacts = GetAllContacts();
      this.isLoading = false; 
    }, 2000); 
  },
  methods: {
    addContact() {
      this.$router.push("/add-contact");
    },
    navigateToContact(id) {
      this.$router.push(`/contact/${id}`);
    },
  },
};
</script>

<style scoped>
.animate-spin {
  @apply transition-transform duration-1000 ease-in-out;
}
</style>
