<template>
  <div>
    <blog-header :siteData="site_data" />
    <nuxt/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BlogHeader from '~/components/layout/BlogHeader'

export default {
  computed: mapState(['site_data']),
  components: {
    BlogHeader
  }
}
</script>
