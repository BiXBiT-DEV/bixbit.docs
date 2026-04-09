<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AppHeader from './components/app/AppHeader.vue'
import AppSidebarTop from './components/app/AppSidebarTop.vue'
</script>

<template>
  <div>
    <AppHeader />
    <DefaultTheme.Layout>
      <template #sidebar-nav-before>
        <AppSidebarTop />
      </template>
    </DefaultTheme.Layout>
  </div>
</template>
