<template>
  <div class="tappable">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Tappable',
  inheritAttrs: false,
}
</script>

<style scoped lang="scss">
.tappable {
  display: inline-block;
  transition: 0.2s;
  &:active {
    transform: scale(0.95);
  }
}
</style>
