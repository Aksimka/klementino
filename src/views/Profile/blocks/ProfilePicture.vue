<template>
  <div class="picture-layout">
    <div class="picture-layout-top">
      <div class="d-flex">
        <div class="picture-layout__name">Aksimka, 24</div>
        <span
          class="picture-layout__online online-flag"
          :class="{ online: true }"
        ></span>
      </div>
    </div>
    <div class="picture-layout__images">
      <div class="blackout-layer"></div>
      <div class="images-stack">
        <img
          v-for="(img, index) in images"
          :key="index"
          :src="require(`@/assets/${img}`)"
          alt="profile image"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePicture',
  props: {
    images: {
      type: Array as string[],
      default: () => ['images/no-img.jpg'],
    },
  },
})
</script>

<style scoped lang="scss">
.picture-layout {
  display: flex;
  position: relative;
  height: calc(100vh - var(--header-heigth) - var(--nav-heigth));
  .picture-layout-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    z-index: 2;
    padding: 0 32px;
  }
  .picture-layout__name {
    font-size: 32px;
    font-weight: 800;
    color: var(--color-background-main);
  }
  .picture-layout__online {
    margin-left: 4px;
  }
  .picture-layout__images {
    position: relative;
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 40px;
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
    padding-bottom: 8px;
  }
}
</style>
