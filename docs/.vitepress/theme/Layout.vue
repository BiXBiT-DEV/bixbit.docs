<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import AppSidebarTop from './components/app/AppSidebarTop.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #sidebar-nav-before>
      <AppSidebarTop />
    </template>
  </DefaultTheme.Layout>
</template>
