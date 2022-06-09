<template>
  <div class="full-size login">
    <div class="half-vh-height mt-8 relative">
      <div>
        <div class="d-flex justify-center height-with-offset">
          <div class="login-image login-image-one">
            <RoundImage img="auth-pictures/recipient_men.png" />
            <div class="purple-layer"></div>
          </div>
          <div class="login-image login-image-two">
            <RoundImage img="auth-pictures/recipient_girl.jpg" />
          </div>
        </div>
      </div>
      <div class="d-flex justify-center mt-9">
        <Heading weight="700" type="2">Login Now</Heading>
      </div>
    </div>
    <div class="half-vh-height"></div>
  </div>
</template>

<script>
export default {
  name: 'Login',
}
</script>

<script setup>
import RoundImage from '@/components/ui/RoundImage/RoundImage'
import Heading from '@/components/ui/Heading/Heading'
</script>

<style scoped lang="scss">
.login {
  --img-offset: 60px;
  --img-height: 170px;
  --img-border-raius: 50px;
}

.login-image {
  height: var(--img-height);
  width: 120px;
  position: relative;
  border-radius: var(--img-border-raius);
  box-shadow: var(--shadow-m);
}
.login-image-one {
  right: -30px;
  opacity: 0.8;
}
.login-image-two {
  top: var(--img-offset);
  right: 30px;
}
.height-with-offset {
  height: calc(var(--img-height) + var(--img-offset));
}
.purple-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #8d3fae;
  opacity: 0.6;
  border-radius: var(--img-border-raius);
}
</style>
