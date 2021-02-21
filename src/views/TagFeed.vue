<template>
    <section class="global-feed">
        <banner/>
        <!-- ================ Component Feed Toggler-->
        <feed-toggler/>
        <!-- ================ Component Feed Toggler -->
        <feed-toggler :tag-name="tagName"/>
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
