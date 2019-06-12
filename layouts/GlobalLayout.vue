<template>
  <div class="theme-container vuepress-theme-simple">
    <header-bar />
    <default-global-layout />
    <footer-bar />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import HeaderBar from '@theme/components/HeaderBar.vue'
import FooterBar from '@theme/components/FooterBar.vue'

export default {
  name: 'GlobalLayout',
  components: {
    DefaultGlobalLayout: GlobalLayout,
    HeaderBar,
    FooterBar,
  },
}
</script>
