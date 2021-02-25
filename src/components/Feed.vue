<template>
    <section class="feed">
        <loading v-if="isLoading"/>
        <error-message v-if="error"/>
        <div v-if="feed">
            <div class="feed-wrapper">
                <div class="feed-card" v-for="(article, index) in feed.articles" :key="index">
                    <div class="feed-header">
                        <div class="feed-header-items">
                            <!-- ==================== Logo -->
                            <router-link :to="{ name: 'userProfile', params: {slug: article.author.username}}">
                                <img :src="article.author.image" alt="Logo">
                            </router-link>
                            <!-- ==================== NickName -->
                            <router-link class="author"
                                         :to="{ name: 'userProfile',
                                             params: {slug: article.author.username}}">
                                {{ article.author.username }}
                            </router-link>
                        </div>
                        <span class="date">{{ article.createdAt }}</span>
                        <add-to-favorites
                          :isFavorited="article.favorited"
                          :articleSlug="article.slug"
                          :favorites-count="article.favoritesCount">
                        </add-to-favorites>
                    </div>
                    <div class="feed-body">
                        <router-link class="link"
                                     :to="{name: 'article',params: { slug: article.slug }}">
                            <h1 class="title">{{ article.title }}</h1>
                            <p class="descr">{{ article.description }}</p>
                            <span class="read">Read more ... </span>
                            <tag-list :tags="article.tagList"></tag-list>
                        </router-link>
                        <hr>
                    </div>
                </div>
            </div>
            <!-- ================ Component Pagination -->
            <pagination
              :total="feed.articlesCount"
              :limit="limit"
              :url="baseUrl"
              :current-page="currentPage"
            />
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/feed'
import { limit } from '@/helpers/variebles'
import { stringify, parseUrl } from 'query-string'
import Pagination from '@/components/Pagination'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'
import TagList from '@/components/TagList'
import AddToFavorites from '@/components/AddToFavorites'

export default {
    name: 'feed',
    components: {
        Pagination,
        Loading,
        ErrorMessage,
        TagList,
        AddToFavorites
    },
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        }),
        limit() {
            return limit
        },
        currentPage() {
            // console.log('route :', this.$route)
            return Number(this.$route.query.page || '1')
        },
        baseUrl() {
            return this.$route.path
        },
        offset() {
            return this.currentPage * limit - limit
        }
    },
    methods: {
        fetchFeed() {
            const parsedUrl = parseUrl(this.apiUrl)
            const stringifiedParams = stringify({
                limit,
                offset: this.offset,
                ...parsedUrl.query
            })
            const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`
            this.$store.dispatch(actionTypes.getFeed, { apiUrl: apiUrlWithParams })
        }
    },
    watch: {
        currentPage() {
            // console.log('currentPage changed')
            this.fetchFeed()
        }

    },
    mounted() {
        this.fetchFeed()
    }
}
</script>