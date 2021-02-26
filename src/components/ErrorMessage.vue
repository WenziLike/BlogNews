<template>
    <section class="error-message fix-center">
        <div>{{ message }}</div>
    </section>
</template>

<script>
export default {
    name: 'errorMessage',
    props: {
        message: {
            type: String,
            required: false,
            default: 'Something went wrong'
        }
    }
}
</script>