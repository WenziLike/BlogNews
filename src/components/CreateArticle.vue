<template>
        <article-form
          :initial-values="initialValues"
          :errors="validationErrors"
          :is-submitting="isSubmitting"
          @articleSubmit="onSubmit"
        >
        </article-form>
</template>

<script>
import { mapState } from 'vuex'
import { actionTypes } from '@/store/modules/createArticle'
import ArticleForm from '@/components/ArticleForm'

export default {
    name: 'createArticle',
    components: { ArticleForm },
    // data() {
    //     return {
    //         initialValues: {
    //             title: '',
    //             description: '',
    //             body: '',
    //             tagList: []
    //         }
    //     }
    // },
    methods: {
        onSubmit(articleInput) {
            this.$store.dispatch(actionTypes.createArticle, { articleInput }).then(article => {
                this.$router.push({ name: 'article', params: { slug: article.slug } })
            })
        }
    },
    computed: {
        ...mapState({
            isSubmitting: state => state.createArticle.isSubmitting,
            validationErrors: state => state.createArticle.validationErrors
        })
    }
}
</script>