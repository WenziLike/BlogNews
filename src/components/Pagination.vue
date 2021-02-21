<template>
    <section class="pagination">
        <div class="wrapper-pagination">
            <ul class="pagination-list">
                <li v-for="page in pages" :key="page"
                    class="pagination-item" :class="{ active: currentPage === page }">
                    <router-link :to="{ path: url, query: { page: page }}"
                                 class="pagination-link">
                        {{ page }}
                    </router-link>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import { range } from '@/helpers/utils'

export default {
    name: 'Pagination',
    props: {
        total: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        currentPage: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    computed: {
        pages() {
            const pagesCount = Math.ceil(this.total / this.limit)
            // console.log(pagesCount)
            return range(1, pagesCount)
        }
    }
}
</script>