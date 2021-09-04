<template>
  <footer>
    {{ year }} © {{ this.$themeConfig.author || '' }}
    <div v-if="$themeConfig.copyrightText">
      {{ $themeConfig.copyrightText }}
    </div>
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

<style>
footer {
  margin-bottom: 32px;
  text-align: center;
  color: #888;
}
</style>
