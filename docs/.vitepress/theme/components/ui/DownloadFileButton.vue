<script setup lang="ts">
import { DownloadIcon } from './icons'

withDefaults(
  defineProps<{
    label?: string
    href?: string
  }>(),
  {
    label: 'instruction file.pdf'
  }
)
</script>

<template>
  <a :href="href" class="download-file-button">
    <span class="download-file-button__text">{{ label }}</span>
    <DownloadIcon class="download-file-button__icon" />
  </a>
</template>

<style scoped>
.download-file-button {
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  width: 405px;
  min-height: 64px;
  border: 1px solid var(--vp-c-text-2);
  border-radius: 8px;
  background: var(--vp-c-bg-soft);
  padding: 14px 20px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  color: var(--vp-c-text-1);
  transition: color 180ms ease;
}

.download-file-button:hover {
  color: var(--vp-c-brand-2);
  border-color: var(--vp-c-brand-2);
}

.download-file-button__text {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
}

.download-file-button__icon  {
  width: 24px;
  height: 24px;
  display: block;
}
</style>
