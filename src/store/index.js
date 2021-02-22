import { createStore } from 'vuex'

import auth from '@/store/modules/auth'
import feed from '@/store/modules/feed'
import popularTags from '@/store/modules/popularTags'
import base from '@/store/modules/base'
import article from '@/store/modules/article'

export default createStore({
    modules: {
        auth,
        feed,
        popularTags,
        base,
        article
    }
})
