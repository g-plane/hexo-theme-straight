<template>
  <time
    :datetime="lastUpdated | formatDate"
    :title="lastUpdated | formatDate"
    pubdate="pubdate"
  >
    {{ lastUpdated | timeago($lang) }}
  </time>
</template>

<script>
import { format } from 'timeago.js'

export default {
  name: 'TimeAgo',
  filters: {
    timeago: str => format(new Date(str), 'zh_CN'),
    formatDate: date => new Date(date).toLocaleDateString(),
  },
  props: {
    lastUpdated: {
      type: [String, Date, Number],
      default: '',
    },
  },
}
</script>
