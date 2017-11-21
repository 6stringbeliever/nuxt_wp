import Vuex from 'vuex'
import wp from '~/lib/wp'

// Mutation Types
export const types = {
  SITE_DATA_UPDATE: 'SITE_DATA_UPDATE',
  AUTHORS_UPDATE: 'AUTHORS_UPDATE',
  POST_LIST_UPDATE: 'POST_LIST_UPDATE',
  CURRENT_POST_UPDATE: 'CURRENT_POST_UPDATE'
}

const createStore = () => {
  return new Vuex.Store({
    state: {
      site_data: {},
      authors: {},
      post_list: [],
      current_post: {}
    },
    mutations: {
      [types.SITE_DATA_UPDATE] (state, payload) {
        state.site_data = { ...payload }
      },
      [types.AUTHORS_UPDATE] (state, payload) {
        state.authors = { ...payload }
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
        const getSiteData = wp.siteData()
          .then(res => {
            commit(types.SITE_DATA_UPDATE, res.site_data)
          })
        const getAuthors = wp.authors()
          .then(res => {
            const authors = res.users.reduce((out, val) => {
              return {
                ...out,
                [val.id]: val
              }
            }, {})
            commit(types.AUTHORS_UPDATE, authors)
          })
        return Promise.all([getSiteData, getAuthors])
      }
    }
  })
}

export default createStore
