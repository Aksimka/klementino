<template>
  <div class="round-image">
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
  name: 'RoundImage',
  props: {
    img: {
      type: String,
      default: 'no-img.jpg',
    },
  },
})
</script>

<style scoped lang="scss">
.round-image {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  img {
    display: inline-block;
    border-radius: 50px;
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
