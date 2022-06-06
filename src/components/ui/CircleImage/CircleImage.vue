<template>
  <div class="circle-image">
    <img
      :src="require(`@/assets/images/${img}`)"
      v-bind="$attrs"
      :alt="$attrs.alt || 'Аватар пользователя'"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CircleImage',
  props: {
    img: {
      type: String,
      default: 'no-img.jpg',
    },
  },
})
</script>

<style scoped lang="scss">
.circle-image {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  img {
    display: inline-block;
    border-radius: 50%;
    object-fit: cover;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
