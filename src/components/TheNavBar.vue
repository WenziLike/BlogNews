<template>
    <header>
        <nav class="navbar">
            <section>
                <ul class="navbar-list">
                    <li class="navbar-item">
                        <router-link :to="{ name: 'globalFeed' }" class="navbar-link">
                            Home
                        </router-link>
                    </li>
                    <!-- ======================= NavBar when logged in -->
                    <template v-if="isLoggedIn">
                        <li class="nav-item">
                            <router-link class="navbar-link" :to="{name: 'createArticle'}">
                                New Article
                            </router-link>
                        </li>

                        <li class="nav-item">
                            <router-link class="navbar-link" :to="{name: 'settings'}">
                                Settings
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{ name: 'userProfile', params: {slug: currentUser.username}}"
                                         class="navbar-link">
                                {{ currentUser.username }}
                            </router-link>
                            <img :src="currentUser.image" :alt="currentUser.username" class="navbar-img">
                        </li>
                    </template>
                    <!-- ======================= NavBar Menu -->
                    <template v-if="isAnonymous">
                        <li class="navbar-item">
                            <router-link :to="{ name: 'register' }" class="navbar-link">
                                Sign up
                            </router-link>
                        </li>
                        <li class="navbar-item">
                            <router-link :to="{ name: 'login' }" class="navbar-link">
                                Sign in
                            </router-link>
                        </li>
                    </template>
                </ul>
            </section>
        </nav>
    </header>
</template>
<script>

import { getterTypes } from '@/store/modules/auth'
import { mapGetters } from 'vuex'

export default {
    name: 'TheNavBar',
    computed: {
        ...mapGetters({
            currentUser: getterTypes.currentUser,
            isLoggedIn: getterTypes.isLoggedIn,
            isAnonymous: getterTypes.isAnonymous
        })
    }
}
</script>