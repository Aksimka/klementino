<template>
  <nav class="navigation">
    <router-link class="navigation-item" to="/">
      <SvgIcon class="picture-action__icon" name="user-swipe" :size="34" />
    </router-link>
    <router-link class="navigation-item" to="/likes">
      <SvgIcon class="picture-action__icon" name="heart" />
    </router-link>
    <router-link class="navigation-item" to="/chats">
      <SvgIcon class="picture-action__icon" name="chats" :size="34" />
    </router-link>
    <router-link class="navigation-item" :to="`/userInfo/${profileInfo.userId}`">
      <SvgIcon class="picture-action__icon" :size="34" name="user-circle" />
    </router-link>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'
import { useUserStore } from '@/store/modules/user'
import { storeToRefs } from 'pinia'
import SvgIcon from '@/components/SvgIcon'

export default defineComponent({
  name: 'Navigation',
  components: { SvgIcon },
  setup() {
    const userStore = useUserStore()
    const { profileInfo } = storeToRefs(userStore)

    return { profileInfo }
  },
})
</script>

<style scoped lang="scss">
.navigation {
  width: 100%;
  height: var(--nav-heigth);
  background-color: var(--color-background-main);
  position: fixed;
  z-index: 10;
  bottom: 0;
  left: 0;
  box-shadow: var(--shadow-m);
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 16px;
  .navigation-item {
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--color-gray);
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: var(--color-primary);
    }
  }
}
</style>