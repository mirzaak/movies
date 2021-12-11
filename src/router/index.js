import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TVShows from '../views/TVShows.vue'
import Signup from '../views/Signup.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/TVShows',
    name: 'TVShows',
    component: TVShows,
  },
  {
    path: '/Signup',
    name: 'Signup',
    component: Signup,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
