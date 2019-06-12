<template>
  <footer class="footer">
    {{ year }} © {{ this.$themeConfig.author || '' }}
    <template v-if="$themeConfig.copyrightText">
      <br>
      {{ $themeConfig.copyrightText }}
    </template>
    <br>
    Powered by
    <a
      href="https://vuepress.vuejs.org/"
      rel="noopener"
      target="_blank"
    >VuePress</a>
    | Theme by
    <a
      href="https://github.com/g-plane/vuepress-theme-simple-blog"
      rel="noopener"
      target="_blank"
    >SimpleBlog</a>
  </footer>
</template>

<script>
export default {
  name: 'FooterBar',
  computed: {
    year() {
      return this.$themeConfig.year || new Date().getFullYear()
    },
  },
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.footer
  margin-bottom 15px
  text-align center
  color metaColor

  a
    color metaColor
    text-decoration underline
</style>
