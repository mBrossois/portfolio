<template>
    <background></background>
    
    <character></character>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Character from '../components/Character.vue'

@Options({
    components: {
        Character
    }
})
export default class Mountain extends Vue{
    
}
</script>

