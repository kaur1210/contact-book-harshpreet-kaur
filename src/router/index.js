import { createRouter, createWebHistory } from 'vue-router';
import DisplayHomeView from '../views/DisplayHomeView.vue';
import AddNewContactView from '../views/AddNewContactView.vue';
import AllContactDetailsView from '../views/AllContactDetailsView.vue';
import UpdateContactView from '../views/UpdateContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: DisplayHomeView },
  { path: '/add-contact', name: 'AddContact', component: AddNewContactView },
  { path: '/contact/:id', name: 'ContactDetails', component: AllContactDetailsView }, 
  { path: '/edit/:id', name: 'EditContact',component: UpdateContactView, props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
