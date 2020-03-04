<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <v-text-field v-model="test" outlined label="qwe"></v-text-field>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    test: ''
  }),
  components: {
    HelloWorld
  }
}
</script>
