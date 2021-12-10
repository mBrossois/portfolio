<template>
  <div ref="characterContainer" class="character">
    <character-movement :pos="pos"></character-movement>
  </div>
</template>

<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import CharacterMovement from './movement/CharacterMovement.vue';
import {
  animationInAction,
  characterPos, isBottomReached,
  isTopReached,
  moveDown,
  moveLeft,
  moveRight,
  moveToNextLevel,
  moveUp
} from '../utils/characterPositioning'
import {watch} from "vue";

@Options({
  components: {
    CharacterMovement
  }
})
export default class HelloWorld extends Vue {
  declare $refs: {
    characterContainer: HTMLDivElement
  }
  pressRight = false;
  pressLeft = false;
  pressUp = false;
  pressDown = false;
  pos = 0;
  moveInterval?: number;

  created() {
    window.addEventListener('keydown', this.onKeydown);
    window.addEventListener('keyup', this.onKeyup);

    watch(() => (this.pressLeft || this.pressRight || this.pressDown || this.pressUp), (curr, old) => {
      if (curr) {
        this.moveInterval = setInterval(() => {
          if(!animationInAction) {
            this.movement();
          }
        }, 200)
      } else {
        clearInterval(this.moveInterval);
      }
    })
  }

  onKeydown(e: KeyboardEvent): void {
    e.preventDefault();

    if (e.key === "d" || e.key === "ArrowRight") {
      this.pressRight = true;
      this.pressLeft = false;
    } else if (e.key === "a" || e.key === "ArrowLeft") {
      this.pressRight = false;
      this.pressLeft = true;
    }
    if (e.key === "w" || e.key === "ArrowUp") {
      this.pressUp = true;
      this.pressDown = false;
    } else if (e.key === "s" || e.key === "ArrowDown") {
      this.pressUp = false;
      this.pressDown = true;
    }
  }

  movement(): void {
    this.pos = 3;
    if (this.pressRight) {
      moveRight(this.$refs.characterContainer);
    } else if (this.pressLeft) {
      moveLeft(this.$refs.characterContainer);
    }
    if (this.pressUp) {
      if(isTopReached(this.$refs.characterContainer)) {
        moveToNextLevel(this.$refs.characterContainer);
        console.log('nex level?');
      } else {
        moveUp(this.$refs.characterContainer);
      }
    } else if (this.pressDown) {
      if(isBottomReached(this.$refs.characterContainer)) {
        console.log('bottoms up');
      } else {
        moveDown(this.$refs.characterContainer);
      }
    }
  }

  onKeyup(e: KeyboardEvent): void {
    if (e.key === "d" || e.key === "ArrowRight") {
      this.pressRight = false;
    } else if (e.key === "a" || e.key === "ArrowLeft") {
      this.pressLeft = false;
    }
    if (e.key === "w" || e.key === "ArrowUp") {
      this.pressUp = false;
    } else if (e.key === "s" || e.key === "ArrowDown") {
      this.pressDown = false;
    }

    if (!(this.pressLeft || this.pressRight || this.pressUp || this.pressDown)) {
      setTimeout(() => {this.pos = 2;
      }, 200);
    }
    this.$refs.characterContainer.style.transform = `translate(${characterPos.x}px, ${characterPos.y}px)`
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.character {
  position: absolute;
  bottom: 0;
  left: 45%;
  height: 185px;
  width: 115px;
}
</style>
