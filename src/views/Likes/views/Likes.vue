<template>
  <Container>
    <div class="likes-header">
      <div class="likes-header__text">Matches</div>
      <div class="likes-header-actions">
        <div class="likes-header-action"></div>
      </div>
    </div>
    <div class="likes-content">
      <div class="likes-content-section">
        <div class="likes-content-section__separator">
          <HorizontalSeparator>Today</HorizontalSeparator>
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Container from '@/components/ui/Container/Container'
import HorizontalSeparator from '@/views/Likes/components/HorizontalSeparator'
export default {
  name: 'Likes',
  components: { HorizontalSeparator, Container },
}
</script>

<style scoped lang="scss">
.likes-header {
  .likes-header__text {
    font-size: 38px;
    font-weight: 800;
    font-family: 'Nunito', sans-serif;
  }
}
.likes-content {
  margin-top: 16px;
}
</style>
