import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Mountain from '../views/Mountain.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'mountain',
    component: Mountain
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
