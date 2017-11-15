<template>
  <main class="container">
    <article>
      <h2 class="subtitle">{{ current_post.title.rendered }}</h2>
      <div v-html="current_post.content.rendered"></div>
    </article>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import wp from '~/lib/wp'
import { types } from '~/store'

export default {
  fetch ({ store, params }) {
    const existing = store.state.post_list.filter(p => p.slug === params.slug)
    if (existing.length > 0) {
      store.commit(types.CURRENT_POST_UPDATE, existing[0])
      return
    }
    return wp.posts({ slug: params.slug })
      .then(json => {
        store.commit(types.CURRENT_POST_UPDATE, json.posts[0])
      })
  },
  computed: mapState(['current_post'])
}
</script>
