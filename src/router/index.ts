import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Profile from '@/views/Profile/Profile.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
