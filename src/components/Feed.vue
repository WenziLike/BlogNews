<template>
    <section class="feed">
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">Something bad happened</div>
        <div v-if="feed" class="feed-wrapper">
            <div class="feed-card" v-for="(article, index) in feed.articles" :key="index">
                <div class="feed-header">
                    <div class="feed-header-items">
                        <!-- ==================== Logo -->
                        <router-link :to="{ name: 'userProfile', params: {slug: article.author.username}}">
                            <img :src="article.author.image" :alt="article.author.username">
                        </router-link>
                        <!-- ==================== NickName -->
                        <router-link class="author"
                                     :to="{ name: 'userProfile',
                                             params: {slug: article.author.username}}">
                            {{ article.author.username }}
                        </router-link>
                    </div>
                    <span class="date">{{ article.createdAt }}TUUUUUU</span>
                    <div>ADD to FAVORITES</div>
                </div>
                <div class="feed-body">
                    <router-link class="link"
                                 :to="{name: 'article',params: { slug: article.slug }}">
                        <h1 class="title">{{ article.title }}</h1>
                        <p class="descr">{{ article.description }}</p>
                    </router-link>
                </div>
                <hr>
                <div class="feed-footer">
                    <span class="read">Read more ... </span>
                    <div class="tag-list">TAG LIST</div>
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
import Pagination from '@/components/Pagination'
import { stringify, parseUrl } from 'query-string'

export default {
    name: 'feed',
    components: { Pagination },
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
            console.group()
            console.log(apiUrlWithParams)
            // console.log('stryngifParams : ', stringifiedParams)
            // console.log('stringify:', stringify)
            // console.log('parseUrl :', parsedUrl)
            // console.log('init feed')
            // console.log('Array URL', this.feed)
            // console.log(this.feed.articles)
            console.groupEnd()
        }
    },
    watch: {
        currentPage() {
            console.log('currentPage changed')
            this.fetchFeed()
        }

    },
    mounted() {
        this.fetchFeed()
    }
}
</script>