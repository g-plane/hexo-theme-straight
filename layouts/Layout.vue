<template>
  <div class="list-view">
    <ul>
      <li v-for="page of filteredList" :key="page.key">
        <router-link :to="page.path" class="title">
          {{ page.title }}
        </router-link>
        <div>
          <time
            class="date"
            :datetime="page.frontmatter.date"
            pubdate="pubdate"
          >
            {{ formatDate(page.frontmatter.date) }}
          </time>
        </div>
      </li>
    </ul>
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
  methods: {
    formatDate(date) {
      date = new Date(date)
      date.setHours(date.getHours() - 8)
      return date.toLocaleDateString()
    },
  },
}
</script>

<style scoped>
@import '../styles/variables.css';

.list-view {
  margin: 0 20px;
}

ul {
  list-style: none;
  padding: 0;
}
li {
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 20px;
  color: var(--primary-color);
  position: relative;
  text-align: center;
  padding-bottom: 8px;
}
.title::after {
  content: '';
  display: block;
  height: 1px;
  width: 100px;
  background: rgba(0, 0, 0, 0.2);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

.date {
  margin-top: 16px;
  color: #777;
  letter-spacing: 1px;
  text-align: center;
  font-size: 14px;
}

.pagination {
  margin-bottom: 24px;
  display: flex;
  justify-content: space-around;
}

.pagination-item {
  color: #555;
}
</style>
