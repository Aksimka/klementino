<template>
  <div class="profile">
    <div class="picture-layout">
      <div class="picture-layout__image">
        <div class="picture-layout__blackout"></div>
        <img
          style="max-height: 100%"
          src="@/assets/images/dg.jpeg"
          alt="profile image"
        />
      </div>
      <div class="picture-actions-layout">
        <Container class="picture-actions-layout-container">
          <div class="picture-layout__back">
            <BackButton />
          </div>
          <div class="picture-main-actions">
            <div class="picture-main__action">
              <RoundButton>
                <CrossIcon class="color_error" :weight="4" :size="28" />
              </RoundButton>
            </div>
            <div class="picture-main__action">
              <RoundButton>
                <CrossIcon :weight="3" />
              </RoundButton>
            </div>
            <div class="picture-main__action">
              <RoundButton>
                <CrossIcon :weight="3" />
              </RoundButton>
            </div>
          </div>
        </Container>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '@/components/ui/BackButton/BackButton.vue'
import Container from '@/components/ui/Container/Container.vue'
import RoundButton from '@/components/ui/RoundButton/RoundButton.vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'

export default defineComponent({
  name: 'Main',
  components: { CrossIcon, RoundButton, Container, BackButton },
  data() {
    return {
      inputValue: null,
    }
  },
})
</script>

<style scoped lang="scss">
.picture-layout {
  position: relative;
  display: flex;
  height: 450px;
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
    justify-content: space-between;
    transform: translateY(50%);
  }
  .picture-main__action {
  }
}
</style>
