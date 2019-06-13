import { mount } from '@vue/test-utils'
import Post from '../../layouts/Post.vue'

jest.mock('vue-disqus')

const frontmatter = {
  path: '/posts/my-post.html',
  date: new Date(),
  tags: ['a'],
}
const mocks = {
  $page: {
    title: 'My Post',
    frontmatter,
  },
  $frontmatter: frontmatter,
  $themeConfig: {},
  $tag: {
    getItemByName: (name: string) => ({ path: `/tag/${name}` }),
  },
}

test('render post', () => {
  const wrapper = mount(Post, {
    mocks,
    stubs: {
      TimeAgo: true,
      'router-link': true,
      ClientOnly: {
        template: '<div></div>',
      },
      Content: {
        template: '<div>content of the post</div>',
      },
    },
  })
  expect(wrapper.find('h1').text()).toContain('My Post')
  expect(wrapper.text()).toContain('content of the post')

  const tagLink = wrapper.find('router-link-stub')
  expect(tagLink.attributes('to')).toBe('/tag/a')
  expect(tagLink.text()).toContain('# a')
})

test('load disqus', () => {
  const wrapper = mount(Post, {
    mocks: {
      ...mocks,
      $themeConfig: {
        disqus: 'abc',
      },
    },
    stubs: ['TimeAgo', 'router-link', 'ClientOnly', 'Content', 'vue-disqus'],
  })

  const disqusArea = wrapper.find('.disqus')
  expect(disqusArea.text()).toContain('本站使用 Disqus')
  expect(disqusArea.find('vue-disqus-stub').attributes('shortname')).toBe('abc')
})
