<template>
  <main class="container main-contents">
    <div>
      <PostList :posts="post_list" />
    </div>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '~/components/posts/PostList.vue'
import wp from '~/lib/wp'
import { types } from '~/store'

export default {
  fetch ({ store, params }) {
    return wp.posts()
      .then(json => {
        store.commit(types.POST_LIST_UPDATE, json.posts)
      })
  },
  head () {
    return {
      title: `${this.site_data.name} | Home`
    }
  },
  computed: mapState(['post_list', 'site_data']),
  components: {
    PostList
  }
}
</script>
