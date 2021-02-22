<template>
    <section class="global-feed">
        <!-- ================ Component Banner -->
        <banner/>
        <!-- ================ Component Burger -->
        <burger-menu/>
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
import BurgerMenu from '@/components/BurgerMenu'

export default {
    name: 'globalFeed',
    components: {
        Feed,
        PopularTags,
        Banner,
        FeedToggler,
        BurgerMenu
    },
    data() {
        return {
            apiUrl: '/articles'
        }
    }
}
</script>
