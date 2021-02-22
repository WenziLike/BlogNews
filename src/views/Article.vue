<template>
    <section class="article">
        <div class="banner">
            <div class="container" v-if="article">
                <h1>{{ article.title }}</h1>
                <div class="article-meta">
                    <router-link :to="{name: 'userProfile', params: {slug:article.author.username}}">
                        <img :src="article.author.image" alt="">
                    </router-link>
                    <div class="article-info">
                        <router-link :to="{name: 'userProfile', params: {slug:article.author.username}}">
                            {{ article.author.username }}
                        </router-link>
                        <span class="date">{{ article.createdAt }}</span>
                    </div>
                    <span v-if="isAuthor">
                        <router-link class="btn" :to="{name:'editArticle', params: {slug: article.slug}}">
                            Edit Article
                        </router-link>
                        <button class="btn delete-article" @click="deleteArticle">Delete Article</button>
                    </span>
                </div>
            </div>
        </div>
        <div class="container-page">
            <loading v-if="isLoading"/>
            <error-message v-if="error"/>
            <div class="article-content" v-if="article">
                <div>
                    <div>
                        <p>{{ article.body }}</p>
                    </div>
                    TAG LIST
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

export default {
    name: 'article',
    components: { ErrorMessage, Loading },
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
        this.$store.dispatch(articleActionTypes.getArticlre, { slug: this.$route.params.slug })
    },
    methods: {
        deleteArticle() {
            this.$store.dispatch(articleActionTypes.deleteArticlre, {
                slug: this.$route.params.slug
            }).then(() => {
                this.$router.push({ name: 'globalFeed' })
            })
        }
    }
}
</script>