import axios from '@/api/axios'

const getPopularTag = () => {
    return axios.get('/tags').then(response => response.data.tags)
}

export default {
    getPopularTag
}