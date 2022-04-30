<template>
  <span class="badge">
    <span v-if="icon" class="badge__icon">
      <SvgIcon :name="icon"></SvgIcon>
    </span>
    <span v-if="text" class="badge__text">
      {{ text }}
    </span>
  </span>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import SvgIcon from '../../SvgIcon.vue'

export default defineComponent({
  name: 'Badge',
  components: { SvgIcon },
  props: {
    icon: {
      type: String as PropType<string | undefined>,
      default: undefined,
    },
    text: {
      type: String,
      default: null,
    },
  },
})
</script>

<style scoped lang="scss">
.badge {
  display: inline-block;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  .badge__icon {
    font-size: 16px;
  }
}
</style>
