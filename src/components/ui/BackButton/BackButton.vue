<template>
  <Tappable>
    <Button class="back-button display-center">
      <CaretLeft color="var(--color-grey)" :size="22" :weight="3" />
    </Button>
  </Tappable>
</template>

<script>
import Button from '../Button/Button'
import CaretLeft from '../../icons/CaretLeft'
import Tappable from '@/components/ui/Tappable/Tappable'

export default {
  name: 'BackButton',
  components: { Tappable, CaretLeft, Button },
}
</script>

<style scoped>
.back-button {
  border-radius: 8px;
  background-color: var(--color-background-main);
  color: var(--color-gray);
  padding: 16px;
}
</style>
