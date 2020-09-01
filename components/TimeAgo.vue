<template>
  <time
    :datetime="lastUpdated | formatDate"
    :title="lastUpdated | formatDate"
    pubdate="pubdate"
  >
    {{ lastUpdated | diff }}
  </time>
</template>

<script>
import dayjs from 'dayjs'
import * as relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export default {
  name: 'TimeAgo',
  filters: {
    diff: date => dayjs(date).toNow(),
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
