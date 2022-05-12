<template>
  <IconButton class="back-button" name="caret-left" :size="22" />
</template>

<script>
import IconButton from '../../../components/ui/IconButton/IconButton'

export default {
  name: 'BackButton',
  components: { IconButton },
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
