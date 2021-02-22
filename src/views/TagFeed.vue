<template>
    <section class="global-feed">
        <!-- ================ Component Banner -->
        <banner/>
        <div class="container">
            <!-- ================ Component Feed Toggler -->
            <feed-toggler :tag-name="tagName"/>
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
    computed: {
        tagName() {
            return this.$route.params.slug
        },
        apiUrl() {
            // console.log('tagName :', tagName)
            return `/articles?tag=${this.tagName}`
        }
    }
}
</script>
