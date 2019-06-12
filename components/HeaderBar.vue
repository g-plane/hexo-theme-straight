<template>
  <header class="header">
    <router-link to="/" class="site-name">
      {{ $site.title }}
    </router-link>
    <div style="clear: both" />
    <nav-bar />
  </header>
</template>

<script>
import NavBar from '@theme/components/NavBar'

export default {
  name: 'HeaderBar',
  components: {
    NavBar,
  },
}
</script>


<style lang="stylus">
@import '../styles/variables.styl'

.site-name
  font-size fontSize + 2
  letter-spacing 5px
  text-transform uppercase
  color textColor
</style>
