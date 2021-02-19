<template>
    <div>
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">Something bad happened</div>
        <div v-if="feed">
            <div class="container">
                <div class="feed" v-for="(article, index) in feed.articles" :key="index">

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
                    <div class="feed-footer">
                        <span class="read">Read more ... </span>
                        <div class="tag-list">TAG LIST</div>
                    </div>
                </div>
                <pagination
                  :total="total"
                  :limit="limit"
                  :current-page="currentPage"
                  :url="url"
                />
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/feed'
import Pagination from '@/components/Pagination'

export default {
    name: 'feed',
    components: { Pagination },
    props: {
        apiUrl: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            total: 500,
            limit: 10,
            currentPage: 5,
            url: '/tags/dragons'
        }
    },
    computed: {
        ...mapState({
            isLoading: state => state.feed.isLoading,
            feed: state => state.feed.data,
            error: state => state.feed.error
        })
    },
    mounted() {
        console.log('init feed')
        console.log('Array URL', this.feed)
        // console.log(this.feed.articles)
        this.$store.dispatch(actionTypes.getFeed, { apiUrl: this.apiUrl })
    }
}
</script>