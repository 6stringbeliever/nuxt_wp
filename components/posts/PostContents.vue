<template>
  <article class="card">
    <h2 class="post-subtitle">
      <nuxt-link :to="`/posts/${post.slug}`" v-if="mode === 'excerpt'">{{ post.title.rendered }}</nuxt-link>
      <span v-else>{{ post.title.rendered }}</span>
    </h2>
    <div v-if="mode === 'full'" class="post-meta">
      <p>{{ post.date_gmt | output-date }}</p>
      <p>by {{ authors[post.author].name }}</p>
    </div>
    <div class="post-body" v-html="post.excerpt.rendered" v-if="mode === 'excerpt'"></div>
    <div class="post-body" v-html="post.content.rendered" v-else></div>
  </article>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    post: { type: Object },
    mode: {
      type: String,
      validator: val => (['excerpt', 'full'].includes(val))
    }
  },
  computed: mapState(['authors'])
}
</script>

<style lang="scss" scoped>
.post-subtitle {
  font-weight: 300;
  font-size: 2.25rem;
  line-height: 1.25;
  margin-bottom: 1rem;

  a {
    color: #000000;

    &:hover {
      text-decoration: none;
    }
  }
}

.post-meta {
  margin: -1rem 0 1rem 0;
  color: #999;
  font-size: 0.75rem;
  line-height: 1;

  p {
    margin: 0;
  }
}

.post-body {
  font-weight: 300;
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}
</style>
