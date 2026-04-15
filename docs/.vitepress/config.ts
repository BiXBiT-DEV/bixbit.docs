import { defineConfig } from 'vitepress'
import { navEn, navRu, sidebarEn, sidebarRu } from './sidebar'

const base = '/site.ams.docs/'

/**
 * Algolia DocSearch: общий блок для всего сайта.
 * При i18n нельзя держать search только в locales.*.themeConfig — в теме для шапки
 * берётся merge с корневым themeConfig; если он пустой, VPNavBarSearch не видит provider.
 * Переводы кнопки/placeholder — через options.locales (см. resolveOptionsForLanguage в теме).
 */
const algoliaOptions = {
  appId: 'PMZUYBQDAK',
  apiKey: '24b09689d5b4223813d9b8e48563c8f6',
  indexName: 'docsearch',
  askAi: {
    assistantId: 'askAIDemo',
    sidePanel: {
      panel: {
        variant: 'floating' as const,
        side: 'right' as const,
        width: '360px',
        expandedWidth: '580px',
        suggestedQuestions: true
      }
    }
  },
  locales: {
    root: {
      placeholder: 'Поиск по документации',
      translations: {
        button: {
          buttonText: 'Поиск',
          buttonAriaLabel: 'Поиск по документации'
        }
      }
    },
    en: {
      placeholder: 'Search documentation',
      translations: {
        button: {
          buttonText: 'Search',
          buttonAriaLabel: 'Search documentation'
        }
      }
    }
  }
}

export default defineConfig({
  base,
  themeConfig: {
    search: {
      provider: 'algolia',
      options: algoliaOptions
    }
  },
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru-RU',
      title: 'AMS Docs',
      description: 'Документация',
      themeConfig: {
        nav: navRu,
        sidebar: sidebarRu,
        outline: { label: 'На этой странице' },
        docFooter: { prev: 'Назад', next: 'Далее' },
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Наверх',
        darkModeSwitchLabel: 'Тема оформления',
        lightModeSwitchTitle: 'Светлая тема',
        darkModeSwitchTitle: 'Тёмная тема',
        langMenuLabel: 'Язык',
        skipToContentLabel: 'Перейти к содержимому'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      title: 'AMS Docs',
      description: 'Documentation',
      themeConfig: {
        nav: navEn,
        sidebar: sidebarEn,
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Return to top',
        darkModeSwitchLabel: 'Appearance',
        lightModeSwitchTitle: 'Switch to light theme',
        darkModeSwitchTitle: 'Switch to dark theme',
        langMenuLabel: 'Change language',
        skipToContentLabel: 'Skip to content'
      }
    }
  }
})
