import { mount } from '@vue/test-utils'
import Page404 from '../../layouts/404.vue'

test('render page', () => {
  const wrapper = mount(Page404, {
    stubs: ['router-link'],
    mocks: {
      $themeConfig: {},
    },
  })
  expect(wrapper.text()).toContain('返回首页')
})

test('custom notice text', () => {
  const wrapper = mount(Page404, {
    stubs: ['router-link'],
    mocks: {
      $themeConfig: {
        noticeOf404: 'back',
      },
    },
  })
  expect(wrapper.text()).toContain('back')
})
