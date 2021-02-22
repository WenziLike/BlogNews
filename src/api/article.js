import axios from '@/api/axios'

const getArticlre = slug => {
    return axios.get(`/article/${slug}`).then(response => response.data.article)
}

const deleteArticle = slug => {
    return axios.delete(`/article/${slug}`)
}

export default {
    getArticlre,
    deleteArticle
}