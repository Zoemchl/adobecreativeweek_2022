<template>

    <div class="view">
        <model-viewer src="src/assets/L_EAR/l_ear.gltf" camera-controls></model-viewer>
        <model-viewer src="src/assets/R_EAR/r_ear.gltf" camera-controls></model-viewer>
        <model-viewer src="src/assets/L_ARM/l_arm.gltf" camera-controls></model-viewer>
        <model-viewer src="src/assets/R_ARM/r_arm.gltf" camera-controls></model-viewer>
    </div>

</template>


<script>
export default {
    name:"Enigme3D",
}
</script>


<style scoped>

.view{
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;
}

model-viewer{
    height: 300px;
}


</style>