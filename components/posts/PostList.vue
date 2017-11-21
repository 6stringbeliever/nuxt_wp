<template>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">
      <PostContents :post="post" mode="excerpt" />
    </li>
  </ul>
</template>

<script>
import PostContents from '~/components/posts/PostContents'

export default {
  props: {
    posts: { type: Array }
  },
  components: {
    PostContents
  }
}
</script>

<style lang="scss" scoped>
.post-list {
  padding: 0;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);

  li {
    list-style: none;
  }
}
</style>
