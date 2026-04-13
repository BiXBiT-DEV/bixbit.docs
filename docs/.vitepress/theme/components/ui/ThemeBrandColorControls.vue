<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

const brand1 = ref('#3451b2')
const brand2 = ref('#3a5ccc')
const brand3 = ref('#5672cd')

function toHex(value: string): string | null {
  const v = value.trim()
  if (v.startsWith('#')) {
    if (v.length === 4) {
      return `#${v[1]}${v[1]}${v[2]}${v[2]}${v[3]}${v[3]}`
    }
    return v.slice(0, 7)
  }
  const m = v.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/)
  if (!m) return null
  const h = (n: number) => n.toString(16).padStart(2, '0')
  return `#${h(+m[1])}${h(+m[2])}${h(+m[3])}`
}

function readFromDocument() {
  if (typeof document === 'undefined') return
  const s = getComputedStyle(document.documentElement)
  const keys = [
    ['--vp-c-brand-1', brand1],
    ['--vp-c-brand-2', brand2],
    ['--vp-c-brand-3', brand3]
  ] as const
  for (const [prop, r] of keys) {
    const hex = toHex(s.getPropertyValue(prop))
    if (hex) r.value = hex
  }
}

function applyToRoot() {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  el.style.setProperty('--vp-c-brand-1', brand1.value)
  el.style.setProperty('--vp-c-brand-2', brand2.value)
  el.style.setProperty('--vp-c-brand-3', brand3.value)
}

function clearInlineAndResync() {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  el.style.removeProperty('--vp-c-brand-1')
  el.style.removeProperty('--vp-c-brand-2')
  el.style.removeProperty('--vp-c-brand-3')
  readFromDocument()
}

onMounted(() => {
  readFromDocument()
})

onUnmounted(() => {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  el.style.removeProperty('--vp-c-brand-1')
  el.style.removeProperty('--vp-c-brand-2')
  el.style.removeProperty('--vp-c-brand-3')
})
</script>

<template>
  <div class="theme-brand-colors">
    <p class="theme-brand-colors__hint">
      Меняет на странице <code>--vp-c-brand-1</code> (ссылки, акцент в тексте),
      <code>--vp-c-brand-2</code> (hover), <code>--vp-c-brand-3</code> (заливка кнопок).
      Сброс при уходе со страницы.
    </p>
    <div class="theme-brand-colors__row">
      <label class="theme-brand-colors__field">
        <span class="theme-brand-colors__label">brand-1</span>
        <input v-model="brand1" type="color" @input="applyToRoot" />
      </label>
      <label class="theme-brand-colors__field">
        <span class="theme-brand-colors__label">brand-2</span>
        <input v-model="brand2" type="color" @input="applyToRoot" />
      </label>
      <label class="theme-brand-colors__field">
        <span class="theme-brand-colors__label">brand-3</span>
        <input v-model="brand3" type="color" @input="applyToRoot" />
      </label>
    </div>
    <button type="button" class="theme-brand-colors__reset" @click="clearInlineAndResync">
      Сбросить к теме
    </button>
  </div>
</template>

<style scoped>
.theme-brand-colors {
  max-width: 560px;
  padding: 20px;
  border: 1px solid #878787;
  border-radius: 8px;
  background: #fff;
}

.theme-brand-colors__hint {
  margin: 0 0 16px;
  font-size: 14px;
  line-height: 1.45;
  color: #3c3c43;
}

.theme-brand-colors__hint code {
  font-size: 0.92em;
}

.theme-brand-colors__row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-end;
}

.theme-brand-colors__field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #101010;
}

.theme-brand-colors__label {
  font-family: ui-monospace, monospace;
  font-size: 13px;
  font-weight: 400;
  color: #67676c;
}

.theme-brand-colors__field input[type='color'] {
  width: 120px;
  height: 40px;
  padding: 2px;
  border: 1px solid #c2c2c4;
  border-radius: 6px;
  cursor: pointer;
  background: #fff;
}

.theme-brand-colors__reset {
  margin-top: 16px;
  padding: 8px 14px;
  font-size: 14px;
  font-weight: 500;
  color: #1d1d1f;
  border: 1px solid #878787;
  border-radius: 8px;
  background: #f6f6f7;
  cursor: pointer;
}

.theme-brand-colors__reset:hover {
  background: #ebebef;
}
</style>
