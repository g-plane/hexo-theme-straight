<template>
  <section class="post-view">
    <div>
      <h1 class="post-title">
        {{ $page.title }}
      </h1>
      <div class="post-info">
        <time :datetime="$frontmatter.date" pubdate="pubdate">
          {{ formatDate($frontmatter.date) }}
        </time>
        <span>
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

<style>
@import '../styles/variables.css';

.post-view {
  position: relative;
}
.post-view a.header-anchor {
  position: absolute;
  left: -30px;
  width: 30px;
  text-align: center;
  visibility: hidden;
}

h1:hover a.header-anchor,
h2:hover a.header-anchor,
h3:hover a.header-anchor,
h4:hover a.header-anchor,
h5:hover a.header-anchor,
h6:hover a.header-anchor {
  visibility: visible;
}

.post-view a[href]:not(.header-anchor):hover {
  border-bottom: 1px dashed var(--primary-color);
}

.post-title {
  text-align: center;
  font-size: 28px;
}

.post-info {
  display: flex;
  justify-content: space-between;
  color: #777;
  font-size: 14px;
}

@media (max-width: 768px) {
  .post-view {
    padding: 0 16px;
  }
}
</style>
