<template>
  <Header />
  <Navigation />
  <div class="window-content">
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import Navigation from '@/blocks/Navigation.vue'
import Header from '@/blocks/Header.vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Root',
  components: { Header, Navigation },
  setup() {
    const { replace } = useRouter()
    replace('/cards')
  },
})
</script>

<style scoped></style>
