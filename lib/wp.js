import axios from 'axios'
import {
  WP_SITE_URL,
  WP_HOMEPAGE_LIMIT
} from '../wpconfig'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json/wp/v2`
  }

  posts () {
    return axios.get(`${this.apiBase}/posts`, {
      params: {
        page: 1,
        per_page: WP_HOMEPAGE_LIMIT
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        return { error: e }
      })
  }
}

const wp = new WpApi(WP_SITE_URL)

export default wp
