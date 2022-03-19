<template>
  <div class="chip">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Chip',
}
</script>

<style scoped>
.chip {
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--color-primary-faded);
  color: var(--color-main-text);
  border-radius: 15px;
}
</style>
