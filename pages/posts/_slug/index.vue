<template>
  <main class="single-post-container main-contents">
    <PostContents :post="current_post" mode="full" />
  </main>
</template>

<script>
import { mapState } from 'vuex'
import PostContents from '~/components/posts/PostContents'
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
  computed: mapState(['site_data', 'current_post']),
  components: {
    PostContents
  },
  head () {
    return {
      title: `${this.site_data.name} | ${this.current_post.title.rendered}`
    }
  }
}
</script>

<style lang="scss" scoped>
.single-post-container {
  margin: -3.5rem auto 0 auto;
  width: 90%;
  max-width: 780px;
}
</style>
