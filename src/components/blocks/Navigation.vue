<template>
  <nav class="navigation display-center">
    <router-link class="navigation-item" to="/">Home</router-link> |
    <router-link class="navigation-item" to="/profile">Profile</router-link> |
    <router-link class="navigation-item" to="/dialogs">Dialogs</router-link>
  </nav>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Navigation',
})
</script>

<style scoped lang="scss">
.navigation {
  width: 100%;
  height: var(--nav-heigth);
  position: fixed;
  bottom: 0;
  left: 0;
  &-item {
    padding: 0 8px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
