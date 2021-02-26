<template>
    <section class="global-feed fix-top">
        <!-- ================ Component Banner -->
        <banner/>
        <div class="container">
            <!-- ================ Component Feed Toggler -->
            <feed-toggler/>
            <div class="wrapper-content">
                <!-- ================ Component Feed -->
                <feed :apiUrl="apiUrl"/>
                <!-- ================ Component Popular Tags -->
                <popular-tags/>
            </div>
        </div>
    </section>
</template>

<script>
import Feed from '@/components/Feed'
import PopularTags from '@/components/PopularTags'
import Banner from '@/components/Banner'
import FeedToggler from '@/components/FeedToggler'

export default {
    name: 'yourFeed',
    components: {
        Feed,
        PopularTags,
        Banner,
        FeedToggler
    },
    data() {
        return {
            apiUrl: '/articles/feed'
        }
    }
}
</script>
