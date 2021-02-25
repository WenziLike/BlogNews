<template>
    <button @click="handleLike" class="add-to-favorites">
        Like ♥︎
        <span>&nbsp;&nbsp; {{ favoritesCountOptimistic }}</span>
    </button>
</template>

<script>
import { actionTypes } from '@/store/modules/addToFavorites'

export default {
    name: 'addToFavorites',
    props: {
        isFavorited: {
            type: Boolean,
            required: true
        },
        articleSlug: {
            type: String,
            required: true
        },
        favoritesCount: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            isFavoritedOptimistic: this.isFavorited,
            favoritesCountOptimistic: this.favoritesCount
        }
    },
    methods: {
        handleLike() {
            this.$store.dispatch(actionTypes.addToFavorites, {
                slug: this.articleSlug,
                isFavorited: this.isFavoritedOptimistic
            })
            if (this.favoritesCountOptimistic) {
                this.favoritesCountOptimistic = this.favoritesCountOptimistic - 1
            } else {
                this.favoritesCountOptimistic = this.favoritesCountOptimistic + 1
            }
            this.isFavoritedOptimistic = !this.isFavoritedOptimistic
        }
    }
}
</script>