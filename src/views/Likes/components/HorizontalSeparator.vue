<template>
  <div class="horizontal-separator">
    <div class="horizontal-separator__line"></div>
    <div class="horizontal-separator__text">
      <slot></slot>
    </div>
    <div class="horizontal-separator__line"></div>
  </div>
</template>

<script>
export default {
  name: 'HorizontalSeparator',
}
</script>

<style scoped lang="scss">
.horizontal-separator {
  display: flex;
  align-items: center;
  justify-content: center;
  .horizontal-separator__text {
    flex: 0;
    margin: 0 8px;
    color: var(--color-gray);
    font-weight: 800;
  }
  .horizontal-separator__line {
    flex: 1;
    height: 1px;
    background-color: var(--color-gray-faded);
  }
}
</style>
