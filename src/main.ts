import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './components/Home.vue'
// import Art from './components/Art.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: Home},
        // {path: "/art", name: "Art", component: Art}
    ]
})

// Styles
import './style.css'
import './styles/fonts.css';

createApp(App)
.use(router)
.mount('#app')
