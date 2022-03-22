<template>
  <div :class="`theme_${currentTheme}`">
    <Navigation />
    <div class="window-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navigation from '@/blocks/Navigation.vue'
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
  color: var(--color-main-text);
  height: 100vh;
}

.window-content {
  height: calc(100vh - var(--nav-heigth));
  overflow-x: hidden;
}
</style>
