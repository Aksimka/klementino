<template>
  <div class="round-image" :style="{ width: size, height: size }">
    <img
      :src="require(`@/assets/${img}`)"
      v-bind="$attrs"
      :alt="$attrs.alt || 'Аватар пользователя'"
      :style="{ width: size, height: size }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RoundImage',
  inheritAttrs: false,
  props: {
    img: {
      type: String,
      default: 'images/no-img.jpg',
    },
    size: {
      type: String,
      default: '50px',
    },
  },
})
</script>

<style scoped lang="scss">
.round-image {
  position: relative;
  display: inline-block;
  img {
    display: inline-block;
    border-radius: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
