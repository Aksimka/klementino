import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import ProfileCardsSwiper from '@/views/ProfileCardsSwiper/views/ProfileCardsSwiper.vue'
import Profile from '@/views/Profile/views/Profile.vue'
import Likes from '@/views/Likes/views/Likes.vue'
import Chats from '@/views/Chats/views/Chats.vue'
import MyProfile from '@/views/MyProfile/views/MyProfile.vue'
import Auth from '@/views/Auth/views/Auth.vue'
import Login from '@/views/Login/views/Login.vue'
import Registration from '@/views/Registartion/views/Registration.vue'
import Root from '@/Root.vue'
import App from '@/views/App/views/App.vue'

export type RouteNames =
  | 'Root'
  | 'Auth'
  | 'Login'
  | 'Registration'
  | 'ProfileCardsSwiper'
  | 'Likes'
  | 'Chats'
  | 'MyProfile'
  | 'Profile'

const savedPositions: { [K in RouteNames | any]: number } = {}

const routes: (Exclude<RouteRecordRaw, 'name'> & { name: RouteNames })[] = [
  {
    path: '/',
    name: 'Root',
    component: Root,
    children: [
      {
        path: 'auth',
        name: 'Auth',
        component: Auth,
        children: [
          {
            path: 'login',
            name: 'Login',
            component: Login,
          },
          {
            path: 'register',
            name: 'Registration',
            component: Registration,
          },
        ],
      },
      {
        path: '/',
        name: 'Application',
        component: App,
        children: [
          {
            path: 'cards',
            name: 'ProfileCardsSwiper',
            component: ProfileCardsSwiper,
          },
          {
            path: 'likes',
            name: 'Likes',
            component: Likes,
          },
          {
            path: 'chats',
            name: 'Chats',
            component: Chats,
          },
          {
            path: 'my-profile',
            name: 'MyProfile',
            component: MyProfile,
          },
          {
            path: 'profile/:id',
            name: 'Profile',
            component: Profile,
          },
        ],
      },
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, pos) {
    const tryFindPos = savedPositions[String(to?.name)]
    return { top: pos?.top || tryFindPos || 0 }
  },
  routes,
})

router.beforeEach((to, from, next) => {
  if (from.name) {
    savedPositions[String(from.name)] = window.scrollY
  }
  next()
})

export default router
