<template>
  <component :is="type" :class="`text-${type}`">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type TextTypes = 'p' | 'i' | 'b'

export default defineComponent({
  name: 'Text',
  props: {
    type: {
      type: String as PropType<TextTypes>,
      default: 'p',
    },
  },
})
</script>

<style scoped></style>
