<template>
  <div class="max-w-4xl mx-auto p-8">
    <div class="bg-white shadow-xl rounded-lg overflow-hidden">
      
      <div class="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-6 text-center">
        <h4 class="text-3xl font-semibold">ADD NEW CONTACT</h4>
      </div>

      <div class="px-8 py-10">
        <form @submit.prevent="onSubmit" class="space-y-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="firstName" class="block text-gray-700 font-medium mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter first name"
                v-model="form.firstName"
                required
              />
            </div>

            <div>
              <label for="lastName" class="block text-gray-700 font-medium mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter last name"
                v-model="form.lastName"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter email address"
                v-model="form.email"
              />
            </div>

            <div>
              <label for="phone" class="block text-gray-700 font-medium mb-2">Phone Number</label>
              <input
                type="tel"
                id="phone"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter phone number"
                v-model="form.phone"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="address" class="block text-gray-700 font-medium mb-2">Address</label>
              <input
                type="text"
                id="address"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter address"
                v-model="form.address"
              />
            </div>

      <div>
  <label for="gender" class="block text-gray-700 font-medium mb-2">Gender</label>
  <select
    id="gender"
    v-model="form.gender"
    class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
  >
    <option value="" disabled selected>Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
  </select>
</div>

          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="website" class="block text-gray-700 font-medium mb-2">Website</label>
              <input
                type="url"
                id="website"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter website URL"
                v-model="form.website"
              />
            </div>

            <div>
              <label for="socialMediaHandle" class="block text-gray-700 font-medium mb-2">Social Media Handle</label>
              <input
                type="text"
                id="socialMediaHandle"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter social media handle"
                v-model="form.socialMediaHandle"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label for="notes" class="block text-gray-700 font-medium mb-2">Notes</label>
              <textarea
                id="notes"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter notes"
                v-model="form.notes"
              ></textarea>
            </div>

            <div>
              <label for="company" class="block text-gray-700 font-medium mb-2">Company</label>
              <input
                type="text"
                id="company"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter company"
                v-model="form.company"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label for="linkedin" class="block text-gray-700 font-medium mb-2">LinkedIn</label>
              <input
                type="url"
                id="linkedin"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter LinkedIn profile URL"
                v-model="form.linkedin"
              />
            </div>

            <div>
              <label for="instagram" class="block text-gray-700 font-medium mb-2">Instagram</label>
              <input
                type="url"
                id="instagram"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter Instagram profile URL"
                v-model="form.instagram"
              />
            </div>

            <div>
              <label for="twitter" class="block text-gray-700 font-medium mb-2">Twitter</label>
              <input
                type="url"
                id="twitter"
                class="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent shadow-md transition duration-200"
                placeholder="Enter Twitter profile URL"
                v-model="form.twitter"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { GetAllContacts, SaveNewContacts } from "../localstorage/localStorage.js";

export default {
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        website: "",
        socialMediaHandle: "",
        notes: "",
        company: "",
        linkedin: "",
        instagram: "",
        twitter: "",
      },
    };
  },
  methods: {
    onSubmit() {
      const contacts = GetAllContacts();
      const newContact = {
        id: Date.now(),
        ...this.form,
      };
      contacts.push(newContact);
      SaveNewContacts(contacts);

      this.form = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        website: "",
        socialMediaHandle: "",
        notes: "",
        company: "",
        linkedin: "",
        instagram: "",
        twitter: "",
      };

      alert("Contact added successfully!");
      this.$router.push(`/contact/${newContact.id}`);
    },
  },
};
</script>
