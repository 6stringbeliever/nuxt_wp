import axios from 'axios'
import { WP_SITE_URL } from '../wpconfig'

class WpApi {
  constructor (siteurl) {
    this.apiBase = `${siteurl}/wp-json/wp/v2/`
  }

  posts () {
    return axios.get('http://local.wordpress.dev/wp-json/wp/v2/posts')
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
