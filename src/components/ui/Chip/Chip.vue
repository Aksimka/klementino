<template>
  <div class="chip">
    <div class="text">
      <slot></slot>
    </div>
    <div class="icon">
      <slot name="icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chip',
}
</script>

<style scoped lang="scss">
.chip {
  padding: 8px 16px;
  font-size: 16px;
  font-weight: bold;
  background-color: var(--color-primary-faded);
  color: var(--color-main-text);
  border-radius: 15px;
  display: flex;
  align-items: center;
  .text {
    flex: 0;
  }
  .icon {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 4px;
    color: var(--color-error);
  }
}
</style>
