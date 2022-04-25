<template>
  <div class="round-image">
    <img
      :src="img"
      v-bind="$attrs"
      :alt="$attrs.alt || 'Аватар пользователя'"
      :style="{ width: size, height: size }"
    />
  </div>
</template>

<script>
export default {
  name: 'RoundImage',
  inheritAttrs: false,
  props: {
    img: {
      type: String,
      default: './no-img.jpg',
    },
    size: {
      type: String,
      default: '50px',
    },
  },
}
</script>

<style scoped lang="scss">
.round-image {
  border-radius: 50%;
  overflow: hidden;
  img {
    display: inline-block;
  }
}
</style>
