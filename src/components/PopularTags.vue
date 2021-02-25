<template>
    <section class="popular-tags">
        <loading v-if="isLoading"/>
        <error-message v-if="error"/>
        <div class="tag" v-if="popularTags">
            <h5>Popular Tags</h5>
            <div class="tag-list">
                <router-link v-for="popularTag in popularTags"
                             :key="popularTag"
                             :to="{ name: 'tag', params: {slug: popularTag}}"
                             class="popular-tag">
                    {{ popularTag }}
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/popularTags'
import Loading from '@/components/Loading'
import ErrorMessage from '@/components/ErrorMessage'

export default {
    name: 'popularTags',
    components: {
        Loading,
        ErrorMessage
    },
    computed: {
        ...mapState({
            isLoading: state => state.popularTags.isLoading,
            error: state => state.popularTags.error,
            popularTags: state => state.popularTags.data
        })
    },
    mounted() {
        this.$store.dispatch(actionTypes.getPopularTags)
    }
}
</script>