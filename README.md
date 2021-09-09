# hexo-theme-straight

🔥 Demo: [https://blog.gplane.win/](https://blog.gplane.win/)

## 📘 Introduction

Inspired by [vuepress-theme-simple](https://github.com/viko16/vuepress-theme-simple), this is a very clean and simple Hexo theme.

## 💿 Installation

Using npm:

```
$ npm i hexo-theme-straight
```

Using Yarn:

```
$ yarn add hexo-theme-straight
```

Then, edit your Hexo configuration file like this:

```yaml
theme: straight
```

## 🔧 Configuration

Create a `_config.straight.yaml` file under your project root.

```yaml
copyright_date: 2016-2021 # This copyright date text will be rendered at footer.

nav_links: # Navigation links will be rendered under site name.
  - text: About Me
    link: /about

disqus:
  enable: true # Default value is `false`. If you use Disqus, set `true`.
  short_name: example # Your Disqus short name
```

## 📃 License

MIT License

2021-present (c) [Pig Fang](https://github.com/g-plane).
