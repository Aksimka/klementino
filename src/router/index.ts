import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProfileCardsSwiper from '@/views/ProfileCardsSwiper/views/ProfileCardsSwiper.vue'
import Profile from '@/views/Profile/views/Profile.vue'
import Likes from '@/views/Likes/views/Likes.vue'
import Chats from '@/views/Chats/views/Chats.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ProfileCardsSwiper',
    component: ProfileCardsSwiper,
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
    path: '/profile/:id',
    name: 'Profile',
    component: Profile,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
