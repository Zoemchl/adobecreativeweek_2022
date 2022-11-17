<template>
    <div class="container">
        <Chatbox />
        <Dev />
        <!-- <Unity /> -->
    </div>
</template>

<script>
import Chatbox from "../components/Chatbox.vue";
import Dev from "../components/Dev.vue";
// import Unity from "../components/Unity.vue";

export default{
    name: 'game',
    components: {Chatbox, Dev},
}
</script>

<style scoped>

</style>