<template>
    <div class="container">
        <Chatbox />
        <Dev />
        <Countdown />
        <Enigme3D />
        <!-- <Unity /> -->
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
}
</script>

<style scoped>

</style>