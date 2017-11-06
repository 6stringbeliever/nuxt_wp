<template>
  <header class="container">
    <h1><nuxt-link to="/">{{ siteData.name }}</nuxt-link></h1>
    <p>{{ siteData.description }}</p>
  </header>
</template>

<script>
export default {
  props: {
    siteData: { type: Object }
  }
}
</script>
