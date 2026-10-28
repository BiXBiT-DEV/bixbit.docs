import type { UserConfig, DefaultTheme } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const sharedSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: true,
  collapseDepth: 1,
  useTitleFromFrontmatter: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  sortMenusByFrontmatterOrder: true,
  excludeByGlobPattern: ['docs.md']
}

export const sidebarOptions = [
  {
    ...sharedSidebarOptions,
    scanStartPath: 'en',
    resolvePath: '/',
    basePath: '/'
  },
  {
    ...sharedSidebarOptions,
    scanStartPath: 'ru',
    resolvePath: '/ru/',
    basePath: '/ru/'
  },
  {
    ...sharedSidebarOptions,
    scanStartPath: 'es',
    resolvePath: '/es/',
    basePath: '/es/'
  }
]

export function withLocalizedSidebar(config: UserConfig): UserConfig {
  return withSidebar(config, sidebarOptions)
}

export const navRu: DefaultTheme.NavItem[] = []

export const navEn: DefaultTheme.NavItem[] = []

export const navEs: DefaultTheme.NavItem[] = []
