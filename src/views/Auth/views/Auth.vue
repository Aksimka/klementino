<template>
  <router-view></router-view>
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

export default defineComponent({
  name: 'Auth',
  setup() {
    const { replace } = useRouter()

    onMounted(() => {
      replace('/auth/login')
    })
  },
})
</script>

<style scoped></style>
