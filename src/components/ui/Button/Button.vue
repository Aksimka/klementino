<template>
  <button class="default-button" v-bind="$attrs"><slot></slot></button>
</template>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<style>
.default-button {
  border: 0;
}
</style>
