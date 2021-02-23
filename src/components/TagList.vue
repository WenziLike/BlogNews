<template>
    <section class="">
        <ul class="">
            <li v-for="tag in tags" :key="tag"  style="color: #0f9b0f">
                {{ tag }} HelloTags
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