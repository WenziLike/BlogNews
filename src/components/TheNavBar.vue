<template>
    <header>
        <nav class="navbar">
            <div class="container">
                <!-- ======================= Logo -->
                <div class="logo">
                    <router-link :to="{name: 'home'}">
                        <h1>
                            BlogNews
                            <strong>Java Script</strong>
                        </h1>
                    </router-link>
                </div>
                <ul class="navbar-list">
                    <!-- ======================= NavBar Menu -->
                    <template v-if="isAnonymous">
                        <li class="navbar-item" v-for="link in navbar" :key="link.title">
                            <router-link :to="link.url" class="navbar-link">
                                {{ link.title }}
                            </router-link>
                        </li>
                    </template>
                    <!-- ======================= NavBar when logged in -->
                    <template v-if="isLoggedIn">
                        <li class="navbar-item"
                            v-for="link in navbarLogin"
                            :key="link.title">
                            <router-link :to="link.url" class="navbar-link">
                                {{ link.title }} &nbsp;
                            </router-link>
                            <router-link :to="link.url" v-if="!link.title" class="navbar-link">
                                <img :src="currentUser.image" alt="logo" class="navbar-img">
                                {{ currentUser.username }}
                            </router-link>
                        </li>
                    </template>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
import { getterTypes } from '@/store/modules/auth'
import { mapGetters } from 'vuex'

export default {
    name: 'TheNavBar',
    data() {
        return {
            navbar: [
                { url: 'name:/home', title: 'Home' },
                { url: 'name:/about', title: 'About' },
                { url: 'name:/register', title: 'Sign up' },
                { url: 'name:/login', title: 'Sign in' }
            ],
            navbarLogin: [
                { url: 'name:/createArticle', title: 'New Article' },
                { url: 'name:/settings', title: 'Settings' },
                { url: 'name:/userProfile, params: {slug: currentUser.username' }
            ]
        }
    },
    computed: {
        ...mapGetters({
            currentUser: getterTypes.currentUser,
            isLoggedIn: getterTypes.isLoggedIn,
            isAnonymous: getterTypes.isAnonymous
        })
        // ...mapState({
        //     currentUser: state => state.auth.currentUser,
        //     isLoggedIn: state => state.auth.isLoggedIn
        // }),
        // currentUser() {
        //     return this.$store.getters[getterTypes.currentUser]
        // },
        // isLoggedIn() {
        //     return this.$store.getters[getterTypes.isLoggedIn]
        // },
        // isAnonymous() {
        //     return this.$store.getters[getterTypes.isAnonymous]
        // }
    }
}
</script>