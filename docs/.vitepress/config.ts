import { defineConfig } from 'vitepress'
import { nav, sidebar } from './sidebar'

/** Публичный префикс на GitHub Pages: /имя-репо/. Для корня (репо user.github.io или свой домен) поставьте '/'. */
const base = '/site.ams.docs/'

export default defineConfig({
  base,
  title: 'AMS Docs',
  description: 'Documentation prototype',
  themeConfig: {
    nav,
    sidebar
  }
})
