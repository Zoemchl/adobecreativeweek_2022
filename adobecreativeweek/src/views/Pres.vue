<template>
    <div class="background">
        <div class="introduction">   
            <h1>IIMERSIVE</h1>
            <model-viewer src="src/assets/FULLBODY/fullbody.gltf" camera-controls  camera-orbit="25deg 85deg"></model-viewer>
        </div>
    </div>
</template>

<script>
export default{
    name: 'pres'
}
</script>

<style scoped>
    .background{
        background-image: url('../../src/assets/img/tunnel.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .introduction{
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100vh;
    }

    h1{
        font-family: good-times,sans-serif;
        font-weight: 700;
        font-style: normal;
        font-size: 5rem;
        color: white;
    }

    model-viewer {
        width: 65%;
        height: 65%;
        position: fixed;
        bottom: 100px;
        margin: auto;
        animation: MoveUpDown 2s linear infinite;
    }

    @keyframes MoveUpDown {
        0%, 100% {
            bottom: 100px;
        }
        50% {
            bottom: 125px;
        }
    }

</style>