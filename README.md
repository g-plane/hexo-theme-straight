# vuepress-theme-simple-blog

🔥 Demo: [https://blog.gplane.win/](https://blog.gplane.win/)

## 📘 Introduction

This is a VuePress theme which is forked from [vuepress-theme-simple](https://github.com/viko16/vuepress-theme-simple), but this fork provides better support for [@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog).

## 💿 Installation

Using npm:

```
$ npm i -D vuepress-theme-simple-blog
```

Using Yarn:

```
$ yarn add --dev vuepress-theme-simple-blog
```

Then, edit your `.vuepress/config.js`:

```js
module.exports = {
  theme: 'simple-blog',
}
```

It's recommended to install [@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog).

## 🔧 Configuration

```js
module.exports = {
  theme: 'simple-blog',
  themeConfig: {
    author: 'your name', // This will be displayed at header and footer.
    navbar: { // This will be displayed at header.
      'link text': 'link url',
      // can be more...
    },
    copyrightText: '',  // Empty by default. This text will be displayed at footer.
    year: '2019', // Current year by default. This text will be displayed at footer.
    noticeOf404: '返回首页', // This is default value. This will be displayed at 404 page.
    disqus: 'shortname', // If it's empty, disqus will be disabled. If you want to enable, just provide your "shortname" of Disqus.
  },
}
```

## ✨ Differences with vuepress-theme-simple

- Better support for [@vuepress/plugin-blog](https://github.com/ulivz/vuepress-plugin-blog).
- Support tags.
- Support pagination for posts list.
- Improved 404 page, and it's customizable.
- Customizable footer text.
- Navigation bar supports VueRouter's `<router-link>` component.
- Out-of-the-box Disqus support.

Additionally, this fork contains unit tests for the theme, while origin work doesn't contain. And the unit tests is written in TypeScript.

## 📃 License

MIT License

2019-present (c) originally by [viko16](https://github.com/viko16), forked and modified by [Pig Fang](https://github.com/g-plane).
