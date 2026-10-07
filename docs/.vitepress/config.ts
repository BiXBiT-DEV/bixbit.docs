import { defineConfig } from 'vitepress'
import { navEn, navRu, withLocalizedSidebar } from './sidebar'

const base = '/'
const siteUrl = 'https://docs.bixbit.io'

function getCanonicalUrl(relativePath: string) {
  const path = relativePath
    .replace(/^en\//, '')
    .replace(/index\.md$/, '')
    .replace(/\.md$/, '.html')

  return new URL(path || '/', `${siteUrl}/`).href
}

function getAbsoluteUrl(url: string) {
  return new URL(url, `${siteUrl}/`).href
}

const localSearchOptions = {
  locales: {
    root: {
      translations: {
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search documentation'
        },
        modal: {
          noResultsText: 'No results found',
          resetButtonTitle: 'Reset search',
          backButtonTitle: 'Back',
          displayDetails: 'Display detailed list',
          footer: {
            selectText: 'to select',
            selectKeyAriaLabel: 'enter',
            navigateText: 'to navigate',
            navigateUpKeyAriaLabel: 'up arrow',
            navigateDownKeyAriaLabel: 'down arrow',
            closeText: 'to close',
            closeKeyAriaLabel: 'escape'
          }
        }
      }
    },
    ru: {
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск по документации'
        },
        modal: {
          noResultsText: 'Ничего не найдено',
          resetButtonTitle: 'Сбросить',
          backButtonTitle: 'Назад',
          displayDetails: 'Показать подробности',
          footer: {
            selectText: 'перейти',
            selectKeyAriaLabel: 'Enter',
            navigateText: 'навигация',
            navigateUpKeyAriaLabel: 'Стрелка вверх',
            navigateDownKeyAriaLabel: 'Стрелка вниз',
            closeText: 'закрыть',
            closeKeyAriaLabel: 'Escape'
          }
        }
      }
    }
  }
}

export default defineConfig(
  withLocalizedSidebar({
    base,
    sitemap: {
      hostname: siteUrl
    },
    rewrites: (id) => (id.startsWith('en/') ? id.slice(3) : id),
    transformPageData(pageData) {
      const seoTitle = typeof pageData.frontmatter.seoTitle === 'string'
        ? pageData.frontmatter.seoTitle.trim()
        : ''
      const title = seoTitle || pageData.title
      const description = pageData.description
      const ogImage = pageData.frontmatter.ogImage

      if (seoTitle) {
        pageData.title = seoTitle
        pageData.titleTemplate = ':title'
      }

      pageData.frontmatter.head ??= []
      pageData.frontmatter.head.push(
        ['link', { rel: 'canonical', href: getCanonicalUrl(pageData.relativePath) }],
        ['meta', { property: 'og:title', content: title }],
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'og:locale', content: pageData.relativePath.startsWith('ru/') ? 'ru_RU' : 'en_US' }]
      )

      if (description) {
        pageData.frontmatter.head.push([
          'meta',
          { property: 'og:description', content: description }
        ])
      }

      if (typeof ogImage === 'string' && ogImage) {
        pageData.frontmatter.head.push([
          'meta',
          { property: 'og:image', content: getAbsoluteUrl(ogImage) }
        ])
      }
    },
    head: [
      ['link', { rel: 'icon', type: 'image/png', href: `${base}favicon-512.png` }],
      ['link', { rel: 'apple-touch-icon', href: `${base}favicon-512.png` }],
      ['link', { rel: 'mask-icon', href: `${base}images/logo.svg`, color: '#d9017a' }]
    ],
    markdown: {
      config(md) {
        md.inline.ruler.before('emphasis', 'underline', (state, silent) => {
          const match = /^\+\+(.+?)\+\+/.exec(state.src.slice(state.pos))
          if (!match) return false
          if (!silent) {
            const token = state.push('html_inline', '', 0)
            token.content = `<u>${md.renderInline(match[1])}</u>`
          }
          state.pos += match[0].length
          return true
        })
      }
    },
    themeConfig: {
      logo: {
        light: '/images/logo.svg',
        dark: '/images/logo-dark.svg',
        alt: 'AMS Docs'
      },
      search: {
        provider: 'local',
        options: localSearchOptions
      }
    },
    locales: {
      root: {
        label: 'English',
        lang: 'en-US',
        title: 'Documentation',
        description: 'Documentation',
        themeConfig: {
          nav: navEn,
          outline: { label: 'On this page', level: [1, 6] },
          docFooter: { prev: 'Previous', next: 'Next' },
          sidebarMenuLabel: 'Menu',
          returnToTopLabel: 'Return to top',
          darkModeSwitchLabel: 'Appearance',
          lightModeSwitchTitle: 'Switch to light theme',
          darkModeSwitchTitle: 'Switch to dark theme',
          langMenuLabel: 'Change language',
          skipToContentLabel: 'Skip to content'
        }
      },
      ru: {
        label: 'Русский',
        lang: 'ru-RU',
        link: '/ru/',
        title: 'Документация',
        description: 'Документация',
        themeConfig: {
          nav: navRu,
          outline: { label: 'На этой странице', level: [1, 6] },
          docFooter: { prev: 'Назад', next: 'Далее' },
          sidebarMenuLabel: 'Меню',
          returnToTopLabel: 'Наверх',
          darkModeSwitchLabel: 'Тема оформления',
          lightModeSwitchTitle: 'Светлая тема',
          darkModeSwitchTitle: 'Тёмная тема',
          langMenuLabel: 'Язык',
          skipToContentLabel: 'Перейти к содержимому'
        }
      }
    }
  })
)
