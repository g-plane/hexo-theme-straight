<template>
  <div class="layout-404">
    <h1>404</h1>
    <router-link to="/">
      {{ $themeConfig.noticeOf404 || '返回首页' }}
    </router-link>
  </div>
</template>

<style lang="stylus">
.layout-404
  margin 8em
  text-align center
</style>
