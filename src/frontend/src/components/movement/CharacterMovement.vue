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
.character {
    position:absolute;
}

.climbing .left-arm-half-up {
    animation: climbing 500ms infinite;
}

.climbing .right-arm-half-up {
    animation: climbing 500ms 250ms infinite;
    opacity: 0;
}

@keyframes climbing {
    0%, 49.9999% {
        opacity: 1;
    }
    50%, 100% {
        opacity: 0;
    }
}


</style>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import CharacterFront from './CharacterFront.vue';
import CharacterBackNeutral from './CharacterBackNeutral.vue';
import CharacterBackArmsUp from './CharacterBackArmsUp.vue';
import CharacterClimbLeftArmUp from './CharacterClimbLeftArmUp.vue';
import CharacterClimbLeftArmHalfUp from './CharacterClimbLeftArmHalfUp.vue';
import CharacterClimbRightArmUp from './CharacterClimbRightArmUp.vue';
import CharacterClimbRightArmHalfUp from './CharacterClimbRightArmHalfUp.vue';


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
