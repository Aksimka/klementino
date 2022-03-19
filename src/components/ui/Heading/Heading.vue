<template>
  <component :is="`h${type}`" :class="`header-${type}`" :style="computedStyles">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { FontWeight, HeadingTypes } from '@/types/typographyTypes'

export default defineComponent({
  name: 'Heading',
  props: {
    type: {
      type: String as PropType<HeadingTypes>,
      required: true,
    },
    weight: {
      type: String as PropType<FontWeight>,
      default: 'normal',
    },
  },
  setup(props) {
    const { weight } = toRefs(props)

    const computedStyles = computed(() => {
      return {
        fontWeight: weight.value,
      }
    })

    return { computedStyles }
  },
})
</script>

<style scoped lang="scss">
.header-2 {
  font-size: 32px;
}
.header-4 {
  font-size: 22px;
}
.header-6 {
  font-size: 18px;
}
</style>
