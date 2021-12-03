<template>
  <div ref="characterContainer" class="character">
    <character-movement :pos="pos"></character-movement>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CharacterMovement from './movement/CharacterMovement.vue';
import {moveToRight, characterPos} from '../utils/characterPositioning'

@Options({
  components: {
    CharacterMovement
  }
})
export default class HelloWorld extends Vue {
  declare $refs: {
    characterContainer: HTMLDivElement
  }
  pos = 0;

  created() {
    window.addEventListener('keydown', this.onKeydown);
    window.addEventListener('keyup', this.onKeyup);
  }

  onKeydown(e: KeyboardEvent) {
    this.pos = 3;
    console.log(e.key);
    if(e.key === "d" || e.key === "ArrowRight") {
      moveToRight(this.$refs.characterContainer);
    }
  }

    onKeyup(e: KeyboardEvent) {
    this.pos = 2;
    console.log(e.key);
    this.$refs.characterContainer.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .character {
    height: 150px;
    width: 300px;
  }
</style>
