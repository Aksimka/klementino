<template>
  <Button class="round-button display-center"><slot></slot></Button>
</template>

<script>
import { defineComponent } from 'vue'
import Button from '../Button/Button'

export default defineComponent({
  name: 'RoundButton',
  components: { Button },
})
</script>

<style scoped>
.round-button {
  padding: 22px;
  border-radius: 50%;
  box-shadow: var(--shadow-m);
  background-color: var(--color-background-main);
}
</style>
