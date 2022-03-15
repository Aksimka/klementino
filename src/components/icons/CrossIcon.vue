<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M25 7L7 25"
      stroke="currentColor"
      :stroke-width="weight"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M25 25L7 7"
      stroke="currentColor"
      :stroke-width="weight"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'CrossIcon',
  props: {
    size: {
      type: Number,
      default: 32,
    },
    weight: {
      type: Number,
      default: 2,
    },
  },
}
</script>

<style scoped></style>
