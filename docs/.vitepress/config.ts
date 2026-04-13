import { defineConfig } from 'vitepress'
import { nav, sidebar } from './sidebar'

const base = '/site.ams.docs/'

export default defineConfig({
  base,
  title: 'AMS Docs',
  description: 'Documentation prototype',
  themeConfig: {
    nav,
    sidebar,
    search: {
      provider: 'algolia',
      options: {
        appId: 'PMZUYBQDAK',
        apiKey: '24b09689d5b4223813d9b8e48563c8f6',
        indexName: 'docsearch',
        askAi: {
          assistantId: 'askAIDemo',
          sidePanel: {
            panel: {
              variant: 'floating',
              side: 'right',
              width: '360px',
              expandedWidth: '580px',
              suggestedQuestions: true
            }
          }
        },
        placeholder: 'Поиск по документации',
        translations: {
          button: {
            buttonText: 'Поиск',
            buttonAriaLabel: 'Поиск по документации'
          }
        }
      }
    }
  }
})
