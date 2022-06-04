<template>
  <div class="page">
    <div class="background" />
    <div class="page-content">
      <div class="page-content__text">
        Sorry, this app doesn't support wide displays :(
      </div>
      <div class="page-content__image">
        <img :src="mobileImage" alt="Mobile app image" />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import mobileSmallImage from '@/assets/images/about_project/klementino_mobile_layout.png'

export default defineComponent({
  name: 'OnlyMobile',
  setup() {
    return { mobileImage: mobileSmallImage }
  },
})
</script>

<style scoped lang="scss">
.page {
  height: 100vh;
  box-sizing: border-box;
  padding: 120px 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgb(130, 125, 11) 0%,
    rgb(43, 43, 43) 100%
  );
  filter: blur(10px);
}

.page-content {
  height: 100%;
  max-width: 1024px;
  background-color: #282828;
  border-radius: 35px;
  -webkit-box-shadow: 0 3px 10px 0 rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0 3px 10px 0 rgba(34, 60, 80, 0.2);
  box-shadow: 0 3px 10px 0 rgba(34, 60, 80, 0.2);
  display: flex;
  align-items: stretch;
  overflow: hidden;
  position: relative;
}

.page-content__text {
  flex: 1;
  font-size: 4em;
  font-family: Helvetica, sans-serif;
  display: flex;
  align-items: center;
  line-height: 72px;
  padding-left: 12px;
  color: #eeeeee;
}

.page-content__image {
  flex: 1;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 550px;
    height: 1000px;
    transform: translateX(0);
    opacity: 1;
    animation-name: show-image;
    animation-duration: 0.7s;
    animation-iteration-count: 1;
  }
}

@keyframes show-image {
  from {
    transform: translateX(150%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .page-content {
    height: 60%;
  }
  .page-content__text {
    flex: 1;
    font-size: 2.5em;
    line-height: 56px;
  }
  .page-content__image {
    img {
      width: 300px;
      height: 700px;
    }
  }
}
</style>
