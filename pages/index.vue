<template>
  <section class="container">
    <div>
      <post-list :posts="posts" />
    </div>
  </section>
</template>

<script>
import PostList from '~/components/PostList.vue'
import wp from '~/lib/wp'

export default {
  async asyncData ({ params }) {
    return wp.posts()
  },
  components: {
    'post-list': PostList
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
