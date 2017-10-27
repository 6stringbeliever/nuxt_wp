import axios from 'axios'
import {
  WP_SITE_URL,
  WP_HOMEPAGE_LIMIT
} from '../wpconfig'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json`
  }

  siteData () {
    return axios.get(this.apiBase)
      .then(json => {
        const { name, description, url, home, gmt_offset, timezone_string } = json.data
        return { site_data: { name, description, url, home, gmt_offset, timezone_string } }
      })
      .catch(e => ({ error: e }))
  }

  posts () {
    return axios.get(`${this.apiBase}/wp/v2/posts`, {
      params: {
        page: 1,
        per_page: WP_HOMEPAGE_LIMIT
      }
    })
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => ({ error: e }))
  }
}

const wp = new WpApi(WP_SITE_URL)

export default wp
