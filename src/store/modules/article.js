import articleApi from '@/api/article'
/* ==================================================== */
const state = {
    data: null,
    isLoading: false,
    error: null
}
/* ==================================================== */
export const mutationTypes = {
    getArticleStart: '[article] get Article Start',
    getArticleSuccess: '[article] get Article Success',
    getArticleFailure: '[article] get Article Failure',
    /* ================ */
    deleteArticleStart: '[article] delete Article Start',
    deleteArticleSuccess: '[article] delete Article Success',
    deleteArticleFailure: '[article] delete Article Failure'
}

export const actionTypes = {
    getArticle: '[article] get Articlre',
    deleteArticle: '[article] delete Articlre'
}
/* ==================================================== */
/* ================ */
const mutations = {
    [mutationTypes.getArticleStart](state) {
        state.isLoading = true
        state.data = null
    },
    [mutationTypes.getArticleSuccess](state, payload) {
        state.isLoading = false
        state.data = payload
    },
    [mutationTypes.getArticleFailure](state) {
        state.isLoading = false
    },
    /* ================ */
    [mutationTypes.deleteArticleStart]() {
    },
    [mutationTypes.deleteArticleSuccess]() {
    },
    [mutationTypes.deleteArticleFailure]() {
    }
}
/* ==================================================== */
const actions = {
    [actionTypes.getArticle](context, { slug }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.getArticleStart, slug)
            articleApi
                .getArticle(slug)
                .then(article => {
                    context.commit(mutationTypes.getArticleSuccess, article)
                    resolve(article)
                })
                .catch(() => {
                    context.commit(mutationTypes.getArticleFailure)
                })
        })
    },
    /* ================ */
    [actionTypes.deleteArticle](context, { slug }) {
        return new Promise(resolve => {
            context.commit(mutationTypes.deleteArticleStart)
            articleApi
                .deleteArticle(slug)
                .then(() => {
                    context.commit(mutationTypes.deleteArticleSuccess)
                    resolve()
                })
                .catch(() => {
                    context.commit(mutationTypes.deleteArticleFailure)
                })
        })
    }
}
/* ==================================================== */
export default {
    state,
    mutations,
    actions
}