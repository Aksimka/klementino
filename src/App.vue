<template>
  <Navigation />

  <div class="window-content" :class="`theme_${currentTheme}`">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/components/blocks/Navigation.vue'
import { useAppStore } from '@/store/modules/app'

export default defineComponent({
  components: { Navigation },
  setup() {
    const appStore = useAppStore()
    let { theme } = appStore
    console.log(appStore, 'useAppStore')
    return {
      currentTheme: theme,
    }
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.window-content {
  height: calc(100% - var(--nav-heigth));
}
</style>
