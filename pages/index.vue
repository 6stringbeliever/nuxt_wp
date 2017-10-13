<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-wp
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <ul>
        <li v-for="post in posts" class="post">
          <article>
            <h2 class="subtitle">{{ post.title.rendered }}</h2>
            <div v-html="post.content.rendered"></div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    return axios.get('http://local.wordpress.dev/wp-json/wp/v2/posts')
      .then(json => {
        return { posts: json.data }
      })
      .catch(e => {
        console.log(e)
      })
  },
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.post {
  list-style: none;
  text-align: left;
}
</style>
