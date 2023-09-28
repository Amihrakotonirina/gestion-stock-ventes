import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//by Amih

import store from "./store";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";

const app = createApp(App)

app.use(createPinia())
app.use(store)
app.use(router)
app.use(ArgonDashboard)

app.mount('#app')
