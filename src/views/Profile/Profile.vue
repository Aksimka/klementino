<template>
  <div class="profile">
    <div class="picture-layout">
      <back-button />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BackButton from '@/components/ui/BackButton/BackButton.vue'

export default defineComponent({
  name: 'Main',
  components: { BackButton },
  data() {
    return {
      inputValue: null,
    }
  },
})
</script>

<style scoped></style>
