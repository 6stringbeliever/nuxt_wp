<template>
  <ul class="post-list">
    <li v-for="post in posts" class="post-list-item">
      <post-excerpt :post="post" />
    </li>
  </ul>
</template>

<script>
import PostExcerpt from '~/components/PostExcerpt.vue'

export default {
  props: ['posts'],
  components: {
    'post-excerpt': PostExcerpt
  }
}
</script>
