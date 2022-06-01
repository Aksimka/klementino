<template>
  <div v-if="isDesktop">
    <OnlyMobile />
  </div>
  <div v-else :class="`theme_${currentTheme}`">
    <Header />
    <Navigation />
    <div class="window-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAppStore } from '@/store/modules/app'
import useClientSize from '@/hooks/useClientSize'
import Navigation from '@/blocks/Navigation.vue'
import Header from '@/blocks/Header.vue'
import OnlyMobile from '@/blocks/OnlyMobile.vue'

export default defineComponent({
  components: { OnlyMobile, Header, Navigation },
  setup() {
    const appStore = useAppStore()
    const { isDesktop } = useClientSize()
    let { theme } = appStore
    return {
      currentTheme: theme,
      isDesktop,
    }
  },
})
</script>

<style lang="scss">
#app {
  font-family: 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-main-text);
  height: 100vh;
}

.window-content {
  height: calc(100vh - var(--nav-heigth) - var(--header-heigth));
  margin-top: var(--header-heigth);
  touch-action: pan-y;
}
</style>
