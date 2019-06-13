import { mount } from '@vue/test-utils'
import Tags from '../../layouts/Tags.vue'

test('render list', () => {
  const wrapper = mount(Tags, {
    stubs: ['router-link'],
    mocks: {
      $tag: {
        list: [{
          name: 'my-tag',
          path: '/tag/my-tag/',
          pages: [{}],
        }],
      },
    },
  })
  const link = wrapper.find('router-link-stub')
  expect(link.text()).toContain('my-tag (1)')
  expect(link.attributes('to')).toBe('/tag/my-tag/')
})
