<template>
  <Tappable>
    <Button class="icon-button display-center">
      <SvgIcon :name="name" :size="size" />
    </Button>
  </Tappable>
</template>

<script>
import Button from '../Button/Button'
import Tappable from '../Tappable/Tappable'
import SvgIcon from '../../SvgIcon'

export default {
  name: 'BackButton',
  components: { SvgIcon, Tappable, Button },
  props: {
    name: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      default: 32,
    },
  },
}
</script>

<style scoped>
.icon-button {
  border-radius: 8px;
  background-color: var(--color-background-main);
  color: var(--color-gray);
  padding: 16px;
}
</style>
