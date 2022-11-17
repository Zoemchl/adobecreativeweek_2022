<template>
    <div class="background">
        <div class="introduction">   
            <h1>IIMERSIVE</h1>
            <model-viewer auto-rotate src="src/assets/FULLBODY/fullbody.gltf"  camera-orbit="25deg 85deg"></model-viewer>
            <button><a href="/game">
                <span>Démarrer</span><i></i></a>
            </button>
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
        background-image: url('../../src/assets/img/tunnel.jpeg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .introduction{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
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

    a{
        all: unset;
    }

    model-viewer {
        width: 55%;
        height: 55%;
        animation: MoveUpDown 3s linear infinite;
        border: none;
    }

    @keyframes MoveUpDown {
        0%, 100% {
            bottom: 50px;
        }
        50% {
            bottom: 80px;
        }
    }

    button {
    text-transform: uppercase;
    font-family: input-mono,monospace;
    letter-spacing: 0.1em;
    padding: 10px 30px;
    transition: 0.5s;
    font-size: 17px;
    background: #fff;
    border: none;
    color: #F07D00;
    cursor: pointer;

    }

    button:hover {
    letter-spacing: 0.25em;
    background: #F07D00;
    color: #F07D00;
    box-shadow: 0 0 45px #F07D00;
    }

    button::before {
    content: '';
    position: absolute;
    inset: 2px;
    background: #fff;
    }

    button span {
    position: relative;
    z-index: 1;
    }

    button i {
    position: absolute;
    inset: 0;
    display: block;
    }

    button i::before {
    content: '';
    position: absolute;
    border: 2px solid #F07D00;
    width: 7px;
    height: 4px;
    top: -3.5px;
    left: 80%;
    background: #fff;
    transform: translateX(-50%);
    transition: 0.5s;
    }

    button:hover i::before {
    width: 20px;
    left: 20%;
    }

    button i::after {
    content: '';
    position: absolute;
    border: 2px solid #F07D00;
    width: 7px;
    height: 4px;
    bottom: -3.5px;
    left: 20%;
    background: #fff;
    transform: translateX(-50%);
    transition: 0.5s;
    }

    button:hover i::after {
    width: 20px;
    left: 80%;
    }

</style>