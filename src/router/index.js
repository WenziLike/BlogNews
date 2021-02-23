import { createRouter, createWebHistory } from 'vue-router'

import GlobalFeed from '@/views/GlobalFeed'
import Register from '@/views/Register'
import Login from '@/views/Login'
import YourFeed from '@/views/YourFeed'
import TagFeed from '@/views/TagFeed'
import Article from '@/views/Article'
import CreateArticle from '@/components/CreateArticle'

const routes = [
    {
        path: '/globalFeed',
        name: 'globalFeed',
        component: GlobalFeed,
        alias: '/'
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/feed',
        name: 'yourFeed',
        component: YourFeed
    },
    {
        path: '/tags/:slug',
        name: 'tag',
        component: TagFeed
    },
    {
        path: '/articles/new',
        name: 'createArticle',
        component: CreateArticle
    },
    {
        path: '/articles/:slug',
        name: 'article',
        component: Article
    },
    {
        path: '/articles/:slug/edit',
        name: 'editArticle',
        component: GlobalFeed
    },
    {
        path: '/settings',
        name: 'settings',
        component: GlobalFeed
    },
    {
        path: '/profiles/:slug',
        name: 'userProfile',
        component: GlobalFeed
    },
    {
        path: '/profiles/:slug/favorites',
        name: 'userProfileFavorites',
        component: GlobalFeed
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active'
})

export default router
