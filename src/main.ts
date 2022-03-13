import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '@/assets/styles/main.scss'
import '@/themes/allThemes.scss'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')
