<template>
  <component :is="type" :class="`text text-${type}`" :style="computedStyles">
    <slot></slot>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, toRefs } from 'vue'
import { FontWeight, TextTypes } from '@/types/typographyTypes'

export default defineComponent({
  name: 'Text',
  props: {
    type: {
      type: String as PropType<TextTypes>,
      default: 'p',
    },
    size: {
      type: Number,
      default: 18,
    },
    weight: {
      type: String as PropType<FontWeight>,
      default: 'normal',
    },
  },
  setup(props) {
    const { size, weight } = toRefs(props)

    const computedStyles = computed(() => {
      return {
        fontSize: `${size.value}px`,
        fontWeight: weight.value,
      }
    })

    return { computedStyles }
  },
})
</script>

<style scoped lang="scss">
.text {
  line-height: 22px;
}
</style>
