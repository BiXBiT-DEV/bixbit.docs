<script setup lang="ts">
defineProps<{
  href?: string
}>()
</script>

<template>
  <a v-if="href" class="base-button" :href="href"><slot /></a>
  <button v-else class="base-button" type="button"><slot /></button>
</template>

<style scoped>
.base-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 16px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: var(--color-pink);
  color: var(--color-white);
  text-decoration: none;
  font-family: var(--second-family);
  cursor: pointer;
}
</style>
