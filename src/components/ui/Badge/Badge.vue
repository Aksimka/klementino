<template>
  <span class="badge" :class="{ badge_full: icon && text }">
    <span v-if="icon" class="badge__icon display-center">
      <SvgIcon :size="14" :name="icon"></SvgIcon>
    </span>
    <span v-if="text" class="badge__text display-center">
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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-primary-faded);
  color: var(--color-primary);
  padding: 4px 8px;
  font-size: 14px;
  .badge__icon {
    font-size: 16px;
  }
  .badge__text {
    margin-left: 4px;
    line-height: 14px;
  }
}
.badge.badge_full {
  border-radius: 12px;
}
</style>
