<template>
    <div class="profile-page fix-top" v-if="userProfile">
        <div class="user-info">
            <div class="container">
                <div class="user-profile fix-center">
                    <img class="user-img mt-1" :src="userProfile.image" alt="logo"/>
                    <h4 class="name">{{ userProfile.username }}</h4>
                    <p>{{ userProfile.bio }}</p>
                    <div>
                        FOLLOW USER BUTTON
                        <router-link
                          v-if="isCurrentUserProfile"
                          class="btn"
                          :to="{name: 'settings'}"
                        >
                            Edit Profile Settings
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="article-toggle">
                <ul class="nav">
                    <li class="nav-item">
                        <router-link :to="{
                                    name: 'userProfile',
                                    params: {slug: userProfile.username}}"
                                     class="nav-link"
                                     :class="{active: routeName === 'userProfile'}">
                            My Posts
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{
                                    name: 'userProfileFavorites',
                                    params: {slug: userProfile.username}}"
                                     class="nav-link"
                                     :class="{active: routeName === 'userProfileFavorites'}">
                            Favorites Posts
                        </router-link>
                    </li>
                </ul>
            </div>
            <feed :api-url="apiUrl"></feed>
        </div>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

import { actionTypes as userProfileActionTypes } from '@/store/modules/userProfile'
import { getterTypes as authGetterTypes } from '@/store/modules/auth'
import Feed from '@/components/Feed'

export default {
    name: 'McvUserProfile',
    components: {
        Feed
    },
    computed: {
        ...mapState({
            isLoading: state => state.userProfile.isLoading,
            userProfile: state => state.userProfile.data,
            error: state => state.userProfile.error
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        isCurrentUserProfile() {
            if (!this.currentUser || !this.userProfile) {
                return false
            }

            return this.currentUser.username === this.userProfile.username
        },
        userProfileSlug() {
            return this.$route.params.slug
        },
        apiUrl() {
            const isFavorites = this.$route.path.includes('favorites')
            return isFavorites ? `/articles?favorited=${this.userProfileSlug}` : `/articles?author=${this.userProfileSlug}`
        },
        routeName() {
            return this.$route.name
        }
    },
    watch: {
        userProfileSlug() {
            this.getUserProfile()
        }
    },
    mounted() {
        this.getUserProfile()
    },
    methods: {
        getUserProfile() {
            this.$store.dispatch(userProfileActionTypes.getUserProfile, {
                slug: this.userProfileSlug
            })
        }
    }
}
</script>