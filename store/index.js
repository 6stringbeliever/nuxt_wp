import Vuex from 'vuex'
import wp from '~/lib/wp'

// Mutation Types
export const types = {
  SITE_DATA_UPDATE: 'SITE_DATA_UPDATE',
  POST_LIST_UPDATE: 'POST_LIST_UPDATE',
  CURRENT_POST_UPDATE: 'CURRENT_POST_UPDATE'
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      site_data: {},
      post_list: [],
      current_post: {}
    },
    mutations: {
      [types.SITE_DATA_UPDATE] (state, payload) {
        state.site_data = { ...payload }
      },
      [types.POST_LIST_UPDATE] (state, payload) {
        state.post_list = [ ...payload ]
      },
      [types.CURRENT_POST_UPDATE] (state, payload) {
        state.current_post = { ...payload }
      }
    },
    actions: {
      nuxtServerInit ({ commit }) {
        return wp.siteData()
          .then(res => {
            commit(types.SITE_DATA_UPDATE, res.site_data)
          })
      }
    }
  })
}

export default createStore
