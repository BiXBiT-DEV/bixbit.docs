import { computed } from 'vue'
import { useData, useRoute } from 'vitepress'
import type { NavItem } from '../types/nav'

export const useThemeNav = () => {
  const { theme } = useData()
  const route = useRoute()

  const navItems = computed<NavItem[]>(() => {
    return (theme.value.nav as NavItem[] | undefined) ?? []
  })

  const isActive = (link: string): boolean => {
    if (link === '/') {
      return route.path === '/'
    }
    return route.path.startsWith(link)
  }

  return {
    navItems,
    isActive
  }
}
