<template>
  <div class="picture-layout">
    <div class="picture-layout__image">
      <div class="picture-layout__blackout"></div>
      <img src="@/assets/images/dg.png" alt="profile image" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ProfilePicture',
})
</script>

<style scoped lang="scss">
.picture-layout {
  display: flex;
  //height: 430px;
  position: relative;
  height: calc(100vh - var(--header-heigth) - var(--nav-heigth));
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
