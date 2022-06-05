import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Root from './Root.vue'
import './registerServiceWorker'
import router from './router'
import Vue3TouchEvents from 'vue3-touch-events'
import '@/assets/styles/main.scss'
import '@/themes/allThemes.scss'

const app = createApp(Root)
app.use(createPinia())
app.use(router)
app.use(Vue3TouchEvents, {
  dragFrequency: 1,
})
app.mount('#app')
