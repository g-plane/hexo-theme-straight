<template>
  <div class="list-view">
    <ol class="list">
      <li v-for="page of filteredList" :key="page.key" class="list-item">
        <router-link :to="page.path" class="item-title">
          {{ page.title }}
        </router-link>
        <br>
        <time
          class="item-date"
          datetime="page.frontmatter.date"
          pubdate="pubdate"
        >{{ page.frontmatter.date.toLocaleDateString() }}</time>
      </li>
    </ol>
    <div class="pagination">
      <router-link
        v-if="$pagination.hasPrev"
        :to="$pagination.prevLink"
        class="pagination-item"
      >
        {{ $pagination.prevText }}
      </router-link>
      <router-link
        v-if="$pagination.hasNext"
        :to="$pagination.nextLink"
        class="pagination-item"
      >
        {{ $pagination.nextText }}
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  computed: {
    filteredList() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.$pagination
        .pages
        .sort((a, b) => b.frontmatter.date - a.frontmatter.date)
    },
  },
}
</script>

<style lang="stylus" scoped>
@import '../styles/variables.styl'

.list-view
  margin 0 20px

  ol,
  ul
    padding 0
    list-style none

.list-item
  position relative
  margin-bottom 50px

.item-title
  display inline-block
  margin-bottom 10px
  font-size fontSize + 2
  color textColor

  &:hover
    color linkColor

.item-date
  display inline-block
  font-size fontSize - 2
  color metaColor
  border-top 1px solid lineColor
  padding-top 12px

.pagination
  margin-bottom 20px
  display flex
  justify-content space-around

.pagination-item
  color metaColor
  text-decoration underline
</style>
