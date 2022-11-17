<template>
    <div class="container">
        <Countdown />
        <Chatbox @changeResult="changeResult" :currentEnigma="this.enigma_count"/>
        <Enigme3D v-if="this.enigma_count === 1"/>
        <Dev v-if="this.enigma_count === 2"/>
        <Unity v-if="this.enigma_count === 3"/>
        <button v-if="this.enigma_count == 0" @click="start_enigma()">Commencer le jeu</button>
        <button v-if="this.result == true"  @click="next_enigma()">Épreuve suivante</button>
    </div>
</template>

<script>
import Chatbox from "../components/Chatbox.vue";
import Dev from "../components/Dev.vue";
import Countdown from "../components/Countdown.vue";
import Enigme3D from "../components/Enigme3D.vue";
import Unity from "../components/Unity.vue";

export default{
    name: 'game',
    components: { Enigme3D, Countdown, Chatbox, Dev, Unity},
    data: function() {
        return {
            enigma_count: 0,
            nbr_of_enigma: 3,
            result: false,
        }
    },
    methods: {
        next_enigma() {
            this.enigma_count++
            if (this.enigma_count === this.nbr_of_enigma) {
                this.enigma_count = 0;
            }
            this.result = false
            return this.enigma_count
        },
        start_enigma() {
            return this.enigma_count++
        },
        changeResult(chatboxResult) {
            return this.result = chatboxResult
        }
    }
}
</script>

<style scoped>
.container {
    min-height: 100vh;
    background-image: url(../assets/img/background1.png);
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>