import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import TVShows from '../views/TVShows.vue'
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
