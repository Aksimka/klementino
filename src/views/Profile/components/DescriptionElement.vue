<template>
  <div class="description-element">
    <div class="description-element__header">
      <slot name="header"></slot>
    </div>
    <div class="description-element__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'DescriptionElement',
  setup(props, context) {
    onMounted(() => {
      console.log(context.slots, 'slots')
    })
  },
})
</script>

<style scoped lang="scss">
.description-element {
  .description-element__header {
  }
}
</style>
