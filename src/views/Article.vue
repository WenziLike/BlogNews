<template>
    <section class="fix-top fix-center">
        <div>
            <div v-if="article">
                <h1 class="article-title">{{ article.title }}</h1>
                <div class="">
                    <router-link :to="{name: 'userProfile', params: {slug: article.author.username}}">
                        <img :src="article.author.image" alt="logo">
                    </router-link>
                    <div>
                        <router-link class="name" :to="{name: 'userProfile', params: {slug:article.author.username}}">
                            {{ article.author.username }}
                        </router-link>
                        <span class="article-date">{{ article.createdAt }}</span>
                    </div>
                    <div v-if="isAuthor">
                        <router-link class="btn" :to="{name:'editArticle', params: {slug: article.slug}}">
                            Edit Article
                        </router-link>
                        <button class="btn delete" @click="deleteArticle">Delete Article</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="">
            <loading v-if="isLoading"/>
            <error-message v-if="isLoading" :message="error"/>
            <div class="" v-if="article">
                <div>
                    <div>
                        <p>{{ article.body }}</p>
                    </div>
                    <tag-list :tags="article.tagList"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { actionTypes as articleActionTypes } from '@/store/modules/article'
import { getterTypes as authGetterTypes } from '@/store/modules/auth'
import { mapState, mapGetters } from 'vuex'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import TagList from '@/components/TagList'

export default {
    name: 'article',
    components: { ErrorMessage, Loading, TagList },
    computed: {
        ...mapState({
            isLoading: state => state.article.isLoading,
            error: state => state.article.error,
            article: state => state.article.data
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        isAuthor() {
            if (!this.currentUser || !this.article) {
                return false
            }
            return this.currentUser.username === this.article.author.username
        }
    },
    mounted() {
        console.log(this.$route)
        this.$store.dispatch(articleActionTypes.getArticle, { slug: this.$route.params.slug })
    },
    methods: {
        deleteArticle() {
            this.$store.dispatch(articleActionTypes.deleteArticle, {
                slug: this.$route.params.slug
            }).then(() => {
                this.$router.push({ name: 'globalFeed' })
            })
        }
    }
}
</script>