<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 12 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 21L1 11L11 1"
      stroke="currentColor"
      :stroke-width="weight"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  name: 'CaretLeft',
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
