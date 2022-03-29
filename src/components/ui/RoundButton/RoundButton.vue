<template>
  <Tappable>
    <Button v-bind="$attrs" class="round-button display-center"
      ><slot></slot
    ></Button>
  </Tappable>
</template>

<script>
import { defineComponent } from 'vue'
import Button from '../Button/Button'
import Tappable from '@/components/ui/Tappable/Tappable'

export default defineComponent({
  name: 'RoundButton',
  components: { Tappable, Button },
})
</script>

<style scoped>
.round-button {
  padding: 20px;
  border-radius: 50%;
  box-shadow: var(--shadow-m);
  background-color: var(--color-background-main);
}
</style>
