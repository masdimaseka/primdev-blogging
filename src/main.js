import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/routes'
const app = createApp(App)

const test = 'test git'

app.use(router)

app.mount('#app')
