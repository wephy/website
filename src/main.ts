import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
import Test from './components/Test.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/test", name: "Test", component: Test}
    ]
})

// Styles
import './style.css'
import './styles/fonts.css';

createApp(App)
.use(router)
.mount('#app')
