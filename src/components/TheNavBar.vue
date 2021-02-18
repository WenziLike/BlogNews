<template>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <router-link :to="{name: 'home'}">
                        <h1>
                            BlogNews
                            <strong>Java Script</strong>
                        </h1>
                    </router-link>
                </div>
                <ul class="navbar-list">
                    <template v-if="isLoggedIn">
                        <li class="navbar-item"
                            v-for="link in navbarLogin"
                            :key="link.title">
                            <router-link :to="link.url" class="navbar-link">
                                {{ link.title }}
                                <div class="navbar-avatar" v-if="link.title === 'User'">
                                    {{ currentUser.username }}
                                    <img :src="currentUser.image" alt="logo" class="navbar-img">
                                </div>
                            </router-link>
                        </li>
                    </template>
                    <template v-else>
                        <li class="navbar-item" v-for="link in navbar" :key="link.title">
                            <router-link :to="link.url" class="navbar-link">
                                {{ link.title }}
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'TheNavBar',
    data() {
        return {
            navbar: [
                { url: 'name:/home', title: 'Home' },
                { url: 'name:/about', title: 'About Us' },
                { url: 'name:/register', title: 'Sign up' },
                { url: 'name:/login', title: 'Sign in' }
            ],
            navbarLogin: [
                { url: 'name:/createArticle', title: 'New Article' },
                { url: 'name:/settings', title: 'Settings' },
                { url: 'name:/userProfile, params: {slug: currentUser.username', title: 'User' }
            ]
        }
    },
    computed: {
        ...mapState({
            currentUser: state => state.auth.currentUser,
            isLoggedIn: state => state.auth.isLoggedIn
        })
    }
}
</script>