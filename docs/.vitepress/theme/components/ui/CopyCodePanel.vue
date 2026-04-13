<script setup lang="ts">
import { computed, ref } from 'vue'
import { CopyIcon } from './icons'

const props = withDefaults(
  defineProps<{
    /** Что копировать; если не задан — берётся текст из слота. */
    text?: string
    showIcon?: boolean
    hoverStyle?: 'default' | 'icon' | 'panel'
    /**
     * `code` (по умолчанию) — слот `#text`: только сырая строка кода/команды (без Markdown).
     * `plain` — слот для обычного текста (подписи).
     */
    variant?: 'code' | 'plain'
  }>(),
  {
    showIcon: true,
    hoverStyle: 'default',
    variant: 'code'
  }
)

const root = ref<HTMLElement | null>(null)

const panelClass = computed(() => ({
  'is-hover-panel': props.hoverStyle === 'panel',
  'is-hover-icon': props.hoverStyle === 'icon',
  'is-variant-plain': props.variant === 'plain'
}))

const copyToClipboard = async () => {
  if (typeof navigator === 'undefined' || !navigator.clipboard) return

  let payload = props.text?.trim() ?? ''
  if (!payload && root.value) {
    const src = root.value.querySelector('[data-copy-source]')
    payload = src?.textContent?.trim() ?? ''
  }
  if (!payload) return

  await navigator.clipboard.writeText(payload)
}
</script>

<template>
  <div ref="root" class="copy-code-panel" :class="panelClass">
    <pre
      v-if="variant === 'code'"
      class="copy-code-panel__code"
      data-copy-source
    ><code><slot name="text" /></code></pre>
    <p v-else class="copy-code-panel__text" data-copy-source>
      <slot name="text" />
    </p>

    <button
      v-if="showIcon"
      class="copy-code-panel__copy"
      type="button"
      aria-label="Copy code"
      @click="copyToClipboard"
    >
      <CopyIcon class="copy-code-panel__copy-icon" />
    </button>
  </div>
</template>

<style scoped>
.copy-code-panel {
  width: 405px;
  min-height: 64px;
  border: 1px solid #878787;
  border-radius: 8px;
  background: #fff;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 20px;
}

.copy-code-panel.is-hover-panel {
  border-color: #5f5f5f;
}

.copy-code-panel__text {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: "DIN Pro", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  letter-spacing: -0.03px;
  color: #1d1d1f;
}

.copy-code-panel__code {
  margin: 0;
  flex: 1;
  min-width: 0;
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  letter-spacing: 0;
  color: #1d1d1f;
  white-space: pre-wrap;
  word-break: break-word;
  tab-size: 2;
}

.copy-code-panel__code code {
  font-family: inherit;
  font-size: inherit;
}

.copy-code-panel__copy {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
}

.copy-code-panel__copy-icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.copy-code-panel.is-hover-icon .copy-code-panel__copy,
.copy-code-panel.is-hover-panel .copy-code-panel__copy {
  color: #7a7a7a;
}
</style>
