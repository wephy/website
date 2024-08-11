import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import WarwickCertificate from './components/WarwickCertificate.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/warwick-certificate", name: "WarwickCertificate", component: WarwickCertificate}
    ]
})

// Styles
import './style.css'
import './styles/fonts.css';

createApp(App)
.use(router)
.mount('#app')
