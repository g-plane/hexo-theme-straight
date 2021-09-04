<template>
  <nav>
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
  </nav>
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

<style scoped>
nav {
  margin: 10px 0;
}

.navbar-item {
  color: #888;
  font-size: 15px;
}
.navbar-item:not(:last-child) {
  margin-right: 10px;
}
</style>
