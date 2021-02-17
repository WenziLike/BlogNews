import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '@/views/About'
import Register from '@/views/Register'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home,
        alias: '/'
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router
