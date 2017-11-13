<template>
  <article>
    <h2 class="subtitle"><nuxt-link :to="`/posts/${post.slug}`">{{ post.title.rendered }}</nuxt-link></h2>
    <div v-html="post.excerpt.rendered"></div>
  </article>
</template>

<script>
export default {
  props: {
    post: { type: Object }
  }
}
</script>
