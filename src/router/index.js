import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PetDetailsComponent from '../components/PetDetailsComponent.vue'




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/LoginView',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/pet-details/:id',
      name: 'pet-details',
      component: PetDetailsComponent,
      props: true,
    },
  ]
})

export default router
