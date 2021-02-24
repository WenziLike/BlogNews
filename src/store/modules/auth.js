import authApi from '@/api/auth'
import { setItem } from '@/helpers/persistanceStorage'
/* ==================================================== */
const state = {
    isSubmitting: false,
    isLoading: false,
    currentUser: null,
    validationErrors: null,
    isLoggedIn: null
}
/* ==================================================== */
export const mutationTypes = {
    registerStart: '[auth] Register Start',
    registerSuccess: '[auth] Register Success',
    registerFailure: '[auth] Register Failure',
    /* ================ */
    loginStart: '[auth] Login Start',
    loginSuccess: '[auth] Login Success',
    loginFailure: '[auth] Login Failure',
    /* ================ */
    getCurrentUserStart: '[auth] Get Current User Start',
    getCurrentUserSuccess: '[auth] Get Current User Success',
    getCurrentUserFailure: '[auth] Get Current User Failure',
    /* ================ */
    updateCurrentUserStart: '[auth] Update Current User Start',
    updateCurrentUserSuccess: '[auth] Update Current User Success',
    updateCurrentUserFailure: '[auth] Update Current User Failure'
}

export const actionTypes = {
    register: '[auth] Register',
    login: '[auth] Login',
    getCurrentUser: '[auth] Get Current User',
    updateCurrentUser: '[auth] Update Current User'
}

export const getterTypes = {
    currentUser: '[auth] currentUser',
    isLoggedIn: '[auth] isLoggedIn',
    isAnonymous: '[auth] isAnonymous'
}
/* ==================================================== */
const getters = {
    [getterTypes.currentUser]: state => {
        return state.currentUser
    },
    [getterTypes.isLoggedIn]: state => {
        return Boolean(state.isLoggedIn)
    },
    [getterTypes.isAnonymous]: state => {
        return state.isLoggedIn === false
    }
}

const mutations = {
    /* ================ Registration */
    [mutationTypes.registerStart](state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.registerSuccess](state, payload) {
        state.isSubmitting = false
        state.currentUser = payload
        state.isLoggedIn = true
    },
    [mutationTypes.registerFailure](state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    },
    /* ================ Login */
    [mutationTypes.loginStart](state) {
        state.isSubmitting = true
        state.validationErrors = null
    },
    [mutationTypes.loginSuccess](state, payload) {
        state.isSubmitting = false
        state.isLoggedIn = true
        state.currentUser = payload
    },
    [mutationTypes.loginFailure](state, payload) {
        state.isSubmitting = false
        state.validationErrors = payload
    },
    /* ================ getUsers */
    [mutationTypes.getCurrentUserStart](state) {
        state.isLoading = true
    },
    [mutationTypes.getCurrentUserSuccess](state, payload) {
        state.isLoading = false
        state.isLoggedIn = true
        state.currentUser = payload
    },
    [mutationTypes.getCurrentUserFailure](state) {
        state.isLoading = false
        state.isLoggedIn = false
        state.currentUser = null
    },
    /* ================ getUsers */
    [mutationTypes.updateCurrentUserStart](state) {
    },
    [mutationTypes.updateCurrentUserSuccess](state, payload) {
        state.currentUser = payload
    },
    [mutationTypes.getCurrentUserFailure](state) {
    }

}
/* ==================================================== */
const actions = {
    [actionTypes.register](context, credentials) {
        return new Promise(resolve => {
            context.commit(mutationTypes.registerStart)
            authApi.register(credentials)
                .then(response => {
                    // console.log(response)
                    context.commit(mutationTypes.registerSuccess, response.data.user)
                    setItem('accessToken', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(result => {
                    context.commit(mutationTypes.registerFailure, result.response.data.errors)
                    // console.log('result errors', result)
                    // console.log('My data errors:', result.response.data)
                })
        })
    },
    /* ==================================================== */
    [actionTypes.login](context, credentials) {
        return new Promise(resolve => {
            context.commit(mutationTypes.loginStart)
            authApi.login(credentials)
                .then(response => {
                    // console.log(response)
                    context.commit(mutationTypes.loginSuccess, response.data.user)
                    setItem('accessToken', response.data.user.token)
                    resolve(response.data.user)
                })
                .catch(result => {
                    context.commit(mutationTypes.loginFailure, result.response.data.errors)
                    // console.log('result errors', result)
                    // console.log('My data errors:', result.response.data)
                })
        })
    },
    /* ==================================================== */
    [actionTypes.getCurrentUser](context) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getCurrentUserStart)
            authApi
                .getCurrentUser()
                .then(response => {
                    // console.log(response)
                    context.commit(mutationTypes.getCurrentUserSuccess, response.data.user)
                    resolve(response.data.user)
                })
                .catch(() => {
                    context.commit(mutationTypes.getCurrentUserFailure)
                })
        })
    },
    /* ==================================================== */
    [actionTypes.updateCurrentUser](context, { currentUserInput }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.updateCurrentUserStart)
            authApi
                .updateCurrentUser(currentUserInput)
                .then(user => {
                    // console.log(response)
                    context.commit(mutationTypes.updateCurrentUserSuccess, user)
                    resolve(user)
                })
                .catch(result => {
                    context.commit(mutationTypes.updateCurrentUserFailure,
                        result.response.data.errors
                    )
                })
        })
    }
}
/* ==================================================== */
export default {
    state,
    mutations,
    actions,
    getters
}