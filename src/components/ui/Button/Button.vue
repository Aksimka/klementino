<template>
  <button v-bind="$attrs"><slot></slot></button>
</template>

<script lang="ts">
export default {
  name: 'Button',
}
</script>

<style scoped></style>
