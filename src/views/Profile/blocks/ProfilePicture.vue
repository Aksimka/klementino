<template>
  <div class="picture-layout">
    <div class="picture-layout__image">
      <div class="picture-layout__blackout"></div>
      <img src="@/assets/images/dg.jpeg" alt="profile image" />
    </div>
    <div class="picture-actions-layout">
      <Container class="picture-actions-layout-container">
        <div class="picture-layout__back">
          <BackButton />
        </div>
        <div class="picture-main-actions">
          <RoundButton class="picture-action background_dislike">
            <SvgIcon
              class="picture-action__icon color_dislike"
              name="cross"
              :size="24"
            />
          </RoundButton>
          <RoundButton class="picture-action background_like">
            <SvgIcon
              class="picture-action__icon color_like"
              :size="48"
              name="heart"
            />
          </RoundButton>
          <RoundButton class="picture-action background_favorite">
            <SvgIcon
              class="picture-action__icon color_favorite"
              name="star"
              :size="24"
            />
          </RoundButton>
        </div>
      </Container>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import BackButton from '@/components/ui/BackButton/BackButton.vue'
import Container from '@/components/ui/Container/Container.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import SvgIcon from '@/components/SvgIcon.vue'

export default defineComponent({
  name: 'ProfilePicture',
  components: { SvgIcon, RoundButton, Container, BackButton },
})
</script>

<style scoped lang="scss">
.picture-layout {
  display: flex;
  height: 430px;
  position: relative;

  .picture-layout__blackout {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .picture-layout__image {
    position: relative;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
    overflow: hidden;
    box-shadow: var(--shadow-m);
    img {
      height: 100%;
    }
  }
  .picture-actions-layout {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }
  .picture-actions-layout-container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 30px;
  }
  .picture-layout__back {
  }
  .picture-main-actions {
    display: flex;
    justify-content: space-around;
    align-items: center;
    transform: translateY(50%);
    .picture-action {
      background-color: var(--color-background-main);
    }
  }
}
</style>
