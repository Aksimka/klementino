<template>
  <div class="container"><slot></slot></div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Container',
})
</script>

<style scoped>
.container {
  padding: 0 32px;
}
</style>
