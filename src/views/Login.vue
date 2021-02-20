<template>
    <section class="login">
        <h1>Sign In</h1>
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
            <button class="btn" :disabled="isSubmitting">Sing In</button>
        </form>
        <span>
            <router-link :to="{name: 'register'}">Need an account ?</router-link>
        </span>
    </section>
</template>

<script>
import ValidationErrors from '@/components/ValidationErrors'
import { actionTypes } from '@/store/modules/auth'
import { mapState } from 'vuex'

export default {
    name: 'login',
    components: {
        ValidationErrors
    },
    data() {
        return {
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
            this.$store.dispatch(actionTypes.login, {
                email: this.email,
                password: this.password
            }).then(() => {
                // console.log('successfully login user', user)
                this.$router.push({ name: 'globalFeed' })
            })
        }
    }
}
</script>