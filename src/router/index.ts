import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Profile from '@/views/Profile/views/Profile.vue'
import Likes from '@/views/Likes/views/Likes.vue'
import Chats from '@/views/Chats/Chats.vue'
import UserInfo from '@/views/UserInfo/UserInfo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/likes',
    name: 'Likes',
    component: Likes,
  },
  {
    path: '/chats',
    name: 'Chats',
    component: Chats,
  },
  {
    path: '/userInfo',
    name: 'UserInfo',
    component: UserInfo,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
