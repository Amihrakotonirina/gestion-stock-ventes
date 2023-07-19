import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//by Amih
import GullKit from "./plugins/gull.kit";

//require('@/assets/css/expo.css')
//require ('@/assets/css/main.css')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
