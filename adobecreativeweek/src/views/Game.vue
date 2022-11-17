<template>
    <Chatbox />
    <Countdown />
    <Enigme3D />
</template>

<script>
import Chatbox from "../components/Chatbox.vue";
import Countdown from "../components/Countdown.vue";
import Enigme3D from "../components/Enigme3D.vue";

export default{
    name: 'game',
    components: { Enigme3D, Countdown, Chatbox},
}
</script>

<style scoped>
</style>