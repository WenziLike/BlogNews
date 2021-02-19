<template>
    <div class="wrapper-content">
        <h2 class="top">BANNER </h2>
        <section>
            <div class="container">
                <div class="wrapper-global-feed">
                    <feed :apiUrl="apiUrl"/>
                    <div class="popular-tags">
                        POPULAR TAGS
                    </div>
                </div>
            </div>
        </section>
    </div>
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
