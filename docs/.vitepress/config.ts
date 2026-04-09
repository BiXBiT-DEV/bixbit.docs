import { defineConfig } from 'vitepress'
import { nav, sidebar } from './sidebar'

export default defineConfig({
  title: 'AMS Docs',
  description: 'Documentation prototype',
  themeConfig: {
    nav,
    sidebar
  }
})
