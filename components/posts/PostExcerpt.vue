<template>
  <article>
    <h2 class="subtitle">{{ post.title.rendered }}</h2>
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
