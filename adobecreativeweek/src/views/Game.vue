<template>
    <div class="container">
        <Countdown />
        <Chatbox />
        <Dev v-if="this.enigma_count === 1"/>
        <Enigme3D v-if="this.enigma_count === 2"/>
        <!-- <Unity /> -->
        <button @click="next_enigma()">Épreuve suivante</button>
    </div>
</template>

<script>
import Chatbox from "../components/Chatbox.vue";
import Dev from "../components/Dev.vue";
import Countdown from "../components/Countdown.vue";
import Enigme3D from "../components/Enigme3D.vue";
// import Unity from "../components/Unity.vue";

export default{
    name: 'game',
    components: { Enigme3D, Countdown, Chatbox, Dev},
    data: function() {
        return {
            enigma_count: 0
        }
    },
    methods: {
        next_enigma() {
            return this.enigma_count++
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    background-image: url(../assets/img/background1.png);
    background-attachment: fixed;
}
</style>