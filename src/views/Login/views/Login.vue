<template>
  <div class="full-size">
    <div class="half-vh-height mt-8">
      <div class="display-center">
        <div class="login-image login-image-one">
          <RoundImage img="auth-pictures/recipient_men.png" />
        </div>
        <div class="login-image login-image-two">
          <RoundImage img="auth-pictures/recipient_girl.jpg" />
        </div>
      </div>
      <div></div>
    </div>
    <div class="half-vh-height"></div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import RoundImage from '@/components/ui/RoundImage/RoundImage'

export default defineComponent({
  name: 'Login',
  components: { RoundImage },
})
</script>

<style scoped lang="scss">
.login-image {
  height: 200px;
  width: 120px;
  position: relative;
  border-radius: 50px;
  box-shadow: var(--shadow-m);
}
.login-image-one {
  right: -30px;
}
.login-image-two {
  top: 45px;
  right: 30px;
}
</style>
