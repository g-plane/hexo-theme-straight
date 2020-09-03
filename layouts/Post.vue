<template>
  <section class="post-view">
    <div class="post-head">
      <h1 class="post-title">
        {{ $page.title }}
      </h1>
      <time
        class="post-info"
        :datetime="$frontmatter.date"
        pubdate="pubdate"
      >{{ $frontmatter.date.toLocaleDateString() }}</time>
      <span class="post-info post-tag">
        <span v-for="tag in $frontmatter.tags" :key="tag">
          <router-link :to="$tag.getItemByName(tag).path">
            # {{ tag }}
          </router-link>
          &nbsp;
        </span>
      </span>
    </div>
    <Content />
    <ClientOnly>
      <Comment />
    </ClientOnly>
  </section>
</template>

<script>
import { Comment } from '@vuepress/plugin-blog/lib/client/components.js'

export default {
  name: 'Post',
  components: {
    Comment,
  },
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'

.post-view
  position relative
  margin 0 20px 50px

  // overflow-x hidden
  a.header-anchor
    position absolute
    left -30px
    width 30px
    text-align center
    visibility hidden

  h1:hover a.header-anchor,
  h2:hover a.header-anchor,
  h3:hover a.header-anchor,
  h4:hover a.header-anchor,
  h5:hover a.header-anchor,
  h6:hover a.header-anchor
    visibility visible

  a[href]:not(.header-anchor)
    position relative

    &:hover
      border-bottom 1px dashed linkColor

    // thanks longsien/BareCSS
    // https://github.com/longsien/BareCSS/blob/v1.1.0/less/_tooltip.less
    &:after
      content attr(href)
      position absolute
      left 50%
      top 0
      visibility hidden
      pointer-events none
      transform translate(-50%, -95%)
      transition all 0.1s ease-in-out
      overflow visible
      padding 0 10px
      background #454f54
      font-size 0.8em
      border-radius 5px
      color #ffffff
      line-height 2
      white-space nowrap
      opacity 0.9

    &:hover:after
      visibility visible
      transform translate(-50%, calc(-100% - 5px))

  code
    background codeBgColor
    padding 2px 4px 0
    border-radius 5px

.post-head
  position relative

.post-title
  font-size fontSize * 2
  margin-bottom 50px
  line-height 1

.post-info
  position absolute
  right 0
  top 0
  font-size fontSize - 2
  font-weight 400
  line-height fontSize * 2
  color metaColor

// when smaller than tablet
@media (max-width: 767px)
  .post-title
    font-size fontSize * 1.5

  .post-info
    line-height fontSize * 1.5

.post-tag
  top fontSize * 1.5

.disqus
  margin-top 80px

.disqus-notice
  color metaColor
  text-align center
</style>
