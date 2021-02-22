<template>
    <section class="error">
        <ul class="error-messages">
            <li v-for="errorMessage in errorMessages" :key="errorMessage">
                {{ errorMessage }}
            </li>
        </ul>
    </section>
</template>
<script>

export default {
    name: 'ValidationErrors',
    props: {
        validationErrors: {
            type: Object,
            required: true
        }
    },
    computed: {
        errorMessages() {
            // console.log('errors :', this.validationErrors)
            // return ['Email can\'t be blank', 'Password can\'t be blank']
            return Object.keys(this.validationErrors).map(name => {
                const messages = this.validationErrors[name].join(', ')
                return `${name} ${messages}`
            })
        }
    }
}
</script>