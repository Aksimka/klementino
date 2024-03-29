<template>
  <svg
    color="currentColor"
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    :style="computedStyles"
  >
    <title v-if="title">{{ title }}</title>
    <use :href="iconPath" />
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, toRefs } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
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
      default: 28,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { name, size, disabled } = toRefs(props)
    const iconPath = computed(() => {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      let icon = require(`@/assets/icons/${name.value}.svg`)
      if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
        icon = icon.default
      }
      return icon.url
    })

    const className = computed(() => {
      return [`svg-icon svg-icon--${name.value}`, { disabled: disabled.value }]
    })

    const computedStyles = computed(() => {
      return {
        width: `${size.value}px`,
        height: `${size.value}px`,
      }
    })

    return { iconPath, className, computedStyles }
  },
})
</script>

<style scoped lang="scss">
.svg-icon {
  fill: currentColor;
  transition: 0.2s;
}
.disabled {
  color: var(--color-gray);
  pointer-events: none;
}
</style>
