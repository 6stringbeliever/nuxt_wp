<template>
  <section class="container">
    <header>
      <h1>{{ site_data.name }}</h1>
      <p>{{ site_data.description }}</p>
    </header>
    <div>
      <PostList :posts="posts" />
    </div>
  </section>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
import wp from '~/lib/wp'

export default {
  async asyncData ({ params }) {
    return Promise.all([wp.posts(), wp.siteData()])
      .then(vals => vals.reduce((inp, val) => ({ ...inp, ...val }), {}))
  },
  components: {
    PostList
  }
}
</script>

<style>
.container {
  margin: 1rem auto;
  width: 90%;
  max-width: 900px;
}
</style>
