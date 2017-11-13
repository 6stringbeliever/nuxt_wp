<template>
  <main class="container">
    <article>
      <h2 class="subtitle">{{ post.title.rendered }}</h2>
      <div v-html="post.content.rendered"></div>
    </article>
  </main>
</template>

<script>
import wp from '~/lib/wp'

export default {
  asyncData ({ params }) {
    return wp.posts({ slug: params.slug })
      .then(json => ({ post: json.posts[0] }))
  }
}
</script>
