<template>
  <header>
    <div class="header-contents">
      <h1><nuxt-link to="/">{{ siteData.name }}</nuxt-link></h1>
      <p class="subhead">{{ siteData.description }}</p>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    siteData: { type: Object }
  }
}
</script>

<style lang="scss" scoped>
header {
  padding: 4rem 0 7rem 0;
  background-image: linear-gradient(325deg, #000380 2%, #197849 100%);
  box-shadow: inset 0 1px 3px 0 rgba(0,0,0,0.50);
}

h1 {
  font-weight: 900;
  font-size: 3rem;
  text-shadow: 2px 4px 4px rgba(0,0,0,0.40);

  a {
    color: #FFFFFF;
    text-decoration: none;

    &:hover {
      text-decoration: none;
    }
  }
}

.header-contents {
  margin: 0 auto;
  width: 90%;
  max-width: 1080px;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
}

.subhead {
  color: #ffffff;
  font-weight: 600;
  font-style: italic;
}
</style>

