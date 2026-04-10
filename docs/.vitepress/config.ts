import { defineConfig } from 'vitepress'
import { nav, sidebar } from './sidebar'

/**
 * Без base CSS/JS ломаются на project Pages: сайт на /repo/, а ассеты ищутся с /assets/...
 * В CI base = /имя-репо/. Репозиторий user.github.io → сайт в корне, base = /.
 * Свой домен в корне: в workflow задайте VITEPRESS_BASE=/
 */
function baseUrl(): string {
  if (process.env.VITEPRESS_BASE !== undefined && process.env.VITEPRESS_BASE !== '') {
    return process.env.VITEPRESS_BASE
  }
  if (process.env.GITHUB_ACTIONS === 'true') {
    const full = process.env.GITHUB_REPOSITORY
    if (full) {
      const [owner, repo] = full.split('/')
      if (owner && repo) {
        const userOrOrgPages = `${owner.toLowerCase()}.github.io`
        if (repo.toLowerCase() === userOrOrgPages) return '/'
        return `/${repo}/`
      }
    }
  }
  return '/'
}

export default defineConfig({
  base: baseUrl(),
  title: 'AMS Docs',
  description: 'Documentation prototype',
  themeConfig: {
    nav,
    sidebar
  }
})
