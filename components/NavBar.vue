<template>
  <div class="navbar">
    <template v-for="(url, name) in navbar">
      <router-link
        v-if="url.startsWith('/')"
        :key="name"
        :to="url"
        class="navbar-item"
      >
        {{ name }}
      </router-link>
      <a
        v-else
        :key="name"
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        class="navbar-item"
      >
        {{ name }}
      </a>
    </template>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  computed: {
    navbar() {
      return this.$themeConfig.navbar || Object.create(null)
    },
  },
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.navbar
  margin 10px 10px 0

.navbar-item
  margin-right 10px
  color metaColor
  text-decoration underline
</style>
