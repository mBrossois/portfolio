<template>
        <character-front class="character" v-if="pos === 0"></character-front>
        <character-back-neutral class="character" v-else-if="pos === 1"></character-back-neutral>
        <character-back-arms-up class="character" v-else-if="pos === 2"></character-back-arms-up>

  <div class="climbing" v-else-if="pos === 3">
            <character-climb-left-arm-half-up class="character left-arm-half-up" ></character-climb-left-arm-half-up>
            <character-climb-right-arm-half-up class="character right-arm-half-up"></character-climb-right-arm-half-up>
        </div>

        <div class="alternate-climbing" v-else-if="pos === 4">
            <character-climb-left-arm-up class="character"></character-climb-left-arm-up>
            <character-climb-right-arm-up class="character"></character-climb-right-arm-up>
        </div>

</template>

<style lang="scss">
.climbing .left-arm-half-up {
    animation: climbing 500ms infinite;
}

.climbing .right-arm-half-up {
    animation: climbing 500ms 250ms infinite;
    height: 0;
}

@keyframes climbing {
    0%, 49.9999% {
        height: 150px;
    }
    50%, 100% {
        height: 0;

        }
}


</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CharacterFront from './animation/CharacterFront.vue';
import CharacterBackNeutral from './animation/CharacterBackNeutral.vue';
import CharacterBackArmsUp from './animation/CharacterBackArmsUp.vue';
import CharacterClimbLeftArmUp from './animation/CharacterClimbLeftArmUp.vue';
import CharacterClimbLeftArmHalfUp from './animation/CharacterClimbLeftArmHalfUp.vue';
import CharacterClimbRightArmUp from './animation/CharacterClimbRightArmUp.vue';
import CharacterClimbRightArmHalfUp from './animation/CharacterClimbRightArmHalfUp.vue';


@Options({
    props: {
        pos: Number
    },
    components: {
        CharacterFront,
        CharacterBackNeutral,
        CharacterBackArmsUp,
        CharacterClimbLeftArmUp,
        CharacterClimbLeftArmHalfUp,
        CharacterClimbRightArmUp,
        CharacterClimbRightArmHalfUp
    }
})
export default class CharacterMovement extends Vue {
}
</script>
