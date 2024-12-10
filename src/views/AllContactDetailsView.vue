<template>
  <div class="max-w-4xl mx-auto p-8">
 
    <div v-if="isLoading" class="flex justify-center items-center h-64">
      <div class="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75"></div>
    </div>

    <div v-else-if="contact" class="bg-white shadow-xl rounded-lg overflow-hidden">
      <div class="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-6 text-center">
        <h4 class="text-3xl font-semibold">CONTACT DETAILS</h4>
        
      </div>

      <div class="px-8 py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b pb-6">
          <div>
            <div class="text-sm font-semibold text-gray-500">First Name</div>
            <div class="text-lg text-gray-700">{{ contact.firstName || "" }}</div>
          </div>

          <div>
            <div class="text-sm font-semibold text-gray-500">Last Name</div>
            <div class="text-lg text-gray-700">{{ contact.lastName || "" }}</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b py-6">
          <div>
            <div class="text-sm font-semibold text-gray-500">Email Address</div>
            <div class="text-lg text-gray-700">{{ contact.email || "" }}</div>
          </div>

          <div>
            <div class="text-sm font-semibold text-gray-500">Phone Number</div>
            <div class="text-lg text-gray-700">{{ contact.phone || "" }}</div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 border-b py-6">
          <div>
            <div class="text-sm font-semibold text-gray-500">Address</div>
            <div class="text-lg text-gray-700">{{ contact.address || "" }}</div>
          </div>

          <div>
            <div class="text-sm font-semibold text-gray-500">Gender</div>
            <div class="text-lg text-gray-700">{{ contact.gender || "" }}</div>
          </div>
        </div>

        <div class="mt-10">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 border-b pb-6">
            <div>
              <div class="text-sm font-semibold text-gray-500">Website</div>
              <div class="text-lg text-gray-700">{{ contact.website || "" }}</div>
            </div>
            <div>
              <div class="text-sm font-semibold text-gray-500">LinkedIn</div>
              <div class="text-lg text-gray-700">{{ contact.linkedin || "" }}</div>
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
            <div>
              <div class="text-sm font-semibold text-gray-500">Instagram</div>
              <div class="text-lg text-gray-700">{{ contact.instagram || "" }}</div>
            </div>
            <div>
              <div class="text-sm font-semibold text-gray-500">Twitter</div>
              <div class="text-lg text-gray-700">{{ contact.twitter || "" }}</div>
            </div>
          </div>
        </div>

        <div class="mt-12">
          <div class="flex gap-4 justify-center">
            <button
              @click="editContact"
              class="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-lg font-bold transition duration-200"
            >
              Edit
            </button>
            <button
              @click="deleteContact"
              class="w-full bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition duration-200"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-gray-500 mt-12">
      <h1 class="text-3xl font-semibold">Contact Not Found</h1>
      <p class="text-lg mt-2">We couldn't find the contact you're looking for.</p>
      <button
        @click="$router.push('/')"
        class="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-bold transition duration-200"
      >
        Back to Contacts
      </button>
    </div>
  </div>
</template>

<script>
import { GetAllContacts, SaveNewContacts } from "../localstorage/localStorage.js";

export default {
  data() {
    return {
      contact: null,
      isLoading: true, 
    };
  },
  created() {
    setTimeout(() => {
      const contacts = GetAllContacts();
      const id = Number(this.$route.params.id);
      this.contact = contacts.find((contact) => contact.id === id);
      this.isLoading = false; 
    }, 2000); 
  },
  methods: {
    deleteContact() {
      const contacts = GetAllContacts();
      const updatedContacts = contacts.filter((c) => c.id !== this.contact.id);
      SaveNewContacts(updatedContacts);

      alert("Contact deleted successfully!");
      this.$router.push("/");
    },
    editContact() {
      this.$router.push(`/edit/${this.contact.id}`);
    },
  },
};
</script>

<style scoped>
.animate-spin {
  @apply transition-transform duration-1000 ease-in-out;
}
</style>
