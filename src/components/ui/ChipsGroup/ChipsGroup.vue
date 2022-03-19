<template>
  <div class="chips-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ChipsGroup',
}
</script>

<style scoped>
.chips-group {
  display: flex;
  flex-wrap: wrap;
}
</style>
