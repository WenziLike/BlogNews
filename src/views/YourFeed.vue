<template>
    <section class="global-feed">
        <banner/>
        <!-- ================ Component Feed Toggler-->
        <feed-toggler/>
        <!-- ================ Component Feed -->
        <feed :apiUrl="apiUrl"/>
        <!-- ================ POPULAR TAGS -->
        <div class="popular-tags">
            <popular-tags/>
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
