<template>
  <Container>
    <div class="likes-header">
      <div class="likes-header__text">Matches</div>
      <div class="likes-header-actions">
        <div class="likes-header-action"></div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/ui/Container/Container'
export default {
  name: 'Likes',
  components: { Container },
}
</script>

<style scoped lang="scss">
.likes-header {
  .likes-header__text {
    font-size: 46px;
    font-weight: 600;
    font-family: 'Nunito', sans-serif;
  }
}
</style>
