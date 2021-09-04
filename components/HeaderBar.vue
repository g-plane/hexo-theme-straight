<template>
  <header>
    <router-link to="/" class="site-name">
      {{ $site.title }}
    </router-link>
    <nav-bar />
  </header>
</template>

<script>
import NavBar from '@theme/components/NavBar.vue'

export default {
  name: 'HeaderBar',
  components: {
    NavBar,
  },
}
</script>

<style scoped>
header {
  margin: 36px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.site-name {
  font-size: 24px;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: #555;
}
</style>
