<template>
    <section class="global-feed">
        <h2 class="top">BANNER </h2>
        <!-- ================ Component Feed -->
        <feed :apiUrl="apiUrl"/>
        <!-- ================ POPULAR TAGS -->
        <div class="popular-tags">
            POPULAR TAGS
        </div>
    </section>
</template>

<script>
import Feed from '@/components/Feed'

export default {
    name: 'globalFeed',
    components: {
        Feed
    },
    data() {
        return {
            apiUrl: '/articles'
        }
    }
}
</script>
