<template>
    <div class="wrapper-content">
        <section>
            <div class="container">
                <div class="wrapper-register">
                    <h1>Sign Up</h1>
                    <span>
                    <!--                            <router-link :to="{name: 'login'}"> Need an account ?</router-link>-->
                </span>
                    <validation-errors v-if="validationErrors" :validation-errors="validationErrors"/>
                    <form @submit.prevent="onSubmit">
                        <fieldset class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Username"
                              v-model="username"
                            >
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Email"
                              v-model="email"
                            >
                        </fieldset>
                        <fieldset class="form-group">
                            <input
                              type="password"
                              class="form-control"
                              placeholder="Password"
                              v-model="password"
                            >
                        </fieldset>
                        <button class="btn" :disabled="isSubmitting">Sing Up</button>
                        {{ isSubmitting }}
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'

export default {
    name: 'register',
    components: {
        ValidationErrors
    },
    data() {
        return {
            username: '',
            email: '',
            password: ''
        }
    },
    computed: {
        isSubmitting() {
            return this.$store.state.auth.isSubmitting
        },
        validationErrors() {
            return this.$store.state.auth.validationErrors
        }
    },
    methods: {
        onSubmit() {
            console.log('Submitted form')
            this.$store.dispatch('register', {
                username: this.username,
                email: this.email,
                password: this.password
            }).then(user => {
                console.log('successfully register user', user)
                this.$router.push({ name: 'home' })
            })
        }
    }
}
</script>

<style scoped lang="scss">
.wrapper-register, .form-group {
    text-align: center;
    margin: 0 auto;
}
</style>