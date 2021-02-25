<template>
    <section class="tag-article">
        <ul class="tag-article-list">
            <li v-for="tag in tags" :key="tag" class="hash-tag">
                #{{ tag }}
            </li>
        </ul>
    </section>
</template>

<script>
export default {
    name: 'tagList',
    props: {
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>