<template>
  <div class="hello">
    <character-movement :pos="pos"></character-movement>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CharacterMovement from './movement/CharacterMovement.vue';

@Options({
  components: {
    CharacterMovement
  }
})
export default class HelloWorld extends Vue {
  pos = 0;

  created() {
    window.addEventListener('keydown', this.onKeydown);
    window.addEventListener('keyup', this.onKeyup);
  }

  onKeydown(e: KeyboardEvent) {
    this.pos = 3;
    console.log(e.key);
  }

    onKeyup(e: KeyboardEvent) {
    this.pos = 2;
    console.log(e.key);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
