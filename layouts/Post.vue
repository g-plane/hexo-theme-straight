<template>
  <section class="post-view">
    <div class="post-head">
      <h1 class="post-title">
        {{ $page.title }}
      </h1>
      <div class="post-info">
        <time :datetime="$frontmatter.date" pubdate="pubdate">
          {{ formatDate($frontmatter.date) }}
        </time>
        <span class="post-tag">
          <span v-for="tag in $frontmatter.tags" :key="tag">
            <router-link :to="$tag.getItemByName(tag).path">
              # {{ tag }}
            </router-link>
            &nbsp;
          </span>
        </span>
      </div>
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
  methods: {
    formatDate(date) {
      date = new Date(date)
      date.setHours(date.getHours() - 8)
      return date.toLocaleDateString()
    },
  },
}
</script>

<style lang="stylus">
@import '../styles/variables.styl'
@import '../styles/variables.css';

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

.post-view a[href]:not(.header-anchor) {
  position: relative;
}
.post-view a[href]:not(.header-anchor):hover {
  border-bottom: 1px dashed var(--primary-color);
}

.post-head
  position relative

.post-title
  text-align center
  font-size fontSize * 2
  line-height 1

.post-info {
  display: flex;
  justify-content: space-between;
  color: #777;
}
.post-info time {
  letter-spacing: 1px;
}

@media (max-width: 768px) {
  .post-title {
    font-size: 18px;
  }
  .post-info {
    line-height fontSize * 1.5
  }
}

.post-tag
  top fontSize * 1.5
</style>
