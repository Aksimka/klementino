<template>
  <component :is="`h${type}`" :class="`header-${type}`">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type HeadingTypes = 1 | 2 | 3 | 4 | 5 | 6

export default defineComponent({
  name: 'Heading',
  props: {
    type: {
      type: Number as PropType<HeadingTypes>,
      required: true,
    },
  },
})
</script>

<style scoped></style>
