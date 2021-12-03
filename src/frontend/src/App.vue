<template>  
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
}
#app {
  margin: 0;
  padding: 0;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
