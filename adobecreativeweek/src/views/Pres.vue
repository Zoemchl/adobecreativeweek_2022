<template>
    <div class="background">
        <div class="introduction">   
            <h1>IIMERSIVE</h1>
            <model-viewer class="model" src="src/FULLBODY/fullbody.gltf" ></model-viewer>
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

</style>