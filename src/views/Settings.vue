<template>
    <section class="settings" v-if="currentUser">
        <div class="container">
            <h1>Settings</h1>
            <validation-errors v-if="validationErrors" :validation-errors="validationErrors"/>
            <form @submit.prevent="onSubmit">
                <fieldset>

                    <fieldset class="form-group">
                        <label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.image"
                              placeholder="Url of profile picture"
                            >
                        </label>
                    </fieldset>

                    <fieldset class="form-group">
                        <label>
                            <input
                              type="text"
                              class="form-control"
                              v-model="form.username"
                              placeholder="Username"
                            >
                        </label>
                    </fieldset>

                    <fieldset class="form-group">
                        <label>
                              <textarea
                                class="form-control"
                                v-model="form.bio"
                                placeholder="Short bio about you">
                              </textarea>
                        </label>
                    </fieldset>

                    <fieldset class="form-group">
                        <label>
                            <input
                              type="email"
                              class="form-control"
                              v-model="form.email"
                              placeholder="Email"
                            >
                        </label>
                    </fieldset>

                    <fieldset class="form-group">
                        <label>
                            <input
                              type="password"
                              class="form-control"
                              v-model="form.password"
                              placeholder="Password"
                            >
                        </label>
                    </fieldset>
                    <button class="btn" :disabled="isSubmitting">Update Settings</button>
                </fieldset>
            </form>
            <hr>
            <button class="btn" @click="logout">Or click here to logout</button>
        </div>
    </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import {
    getterTypes as authGetterTypes,
    actionTypes as authActionTypes
} from '@/store/modules/auth'

import ValidationErrors from '@/components/ValidationErrors'

export default {
    name: 'settings',
    components: { ValidationErrors },
    computed: {
        ...mapState({
            isSubmitting: state => state.settings.isSubmitting,
            validationErrors: state => state.settings.validationErrors
        }),
        ...mapGetters({
            currentUser: authGetterTypes.currentUser
        }),
        form() {
            return {
                username: this.currentUser.username,
                bio: this.currentUser.bio,
                image: this.currentUser.image,
                email: this.currentUser.email,
                password: ''
            }
        }
    },
    methods: {
        onSubmit() {
            this.$store.dispatch(authActionTypes.updateCurrentUser, {
                currentUserInput: this.form
            })
        },
        logout() {
            this.$store.dispatch(authActionTypes.logout).then(() => {
                this.$router.push({ name: 'globalFeed' })
            })
        }
    }
}
</script>
