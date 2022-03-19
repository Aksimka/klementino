<template>
  <SvgIcon :title="title" :name="name" :style="computedStyle" />
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  name: 'Icon',
  components: { SvgIcon },
  props: {
    name: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: null,
    },
    size: {
      type: Number,
      default: 18,
    },
    strokeWidth: {
      type: Number,
      default: 2,
    },
  },
  setup(props) {
    const { strokeWidth, size } = toRefs(props)
    let computedStyle = computed(() => {
      return {
        'stroke-width': strokeWidth,
        width: size,
        height: size,
      }
    })

    return { computedStyle }
  },
})
</script>

<style scoped></style>
