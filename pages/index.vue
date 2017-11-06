<template>
  <main class="container">
    <div>
      <PostList :posts="posts" />
    </div>
  </main>
</template>

<script>
import PostList from '~/components/posts/PostList.vue'
import wp from '~/lib/wp'

export default {
  async asyncData ({ params }) {
    return wp.posts()
  },
  head () {
    return {
      title: `${this.$store.state.site_data.name} | Home`
    }
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
