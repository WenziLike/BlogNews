<template>
    <section class="register fix-top">
        <h1>Sign Up</h1>
        <!-- ================ Validation -->
        <validation-errors
          class="validation-errors"
          v-if="validationErrors"
          :validation-errors="validationErrors"
        />
        <!-- ================ Form -->
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
        </form>
        <span>
            <router-link :to="{name: 'login'}">Have an account ?</router-link>
        </span>
    </section>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'
import { actionTypes } from '@/store/modules/auth'
import { mapState } from 'vuex'

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
        ...mapState({
            isSubmitting: state => state.auth.isSubmitting,
            validationErrors: state => state.auth.validationErrors
        })
    },
    methods: {
        onSubmit() {
            // console.log('Submitted form')
            this.$store.dispatch(actionTypes.register, {
                username: this.username,
                email: this.email,
                password: this.password
            }).then(() => {
                // console.log('successfully register user', user)
                this.$router.push({ name: 'globalFeed' })
            })
        }
    }
}
</script>
/*    computed: {
isSubmitting() {
return this.$store.state.auth.isSubmitting
},
validationErrors() {
return this.$store.state.auth.validationErrors
}
},*/