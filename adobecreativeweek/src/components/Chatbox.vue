<template>

    <div class="chatbox">
        <div class="container">
            <p>> Salut !</p>
            <img class="happy_iimersive" src="../assets/img/happy_iimersive.png" alt="IIMersive happy face icon">
            <h3>IIMersive</h3>
            <button>Suivant</button>
        </div>
    </div>

</template>


<script>
export default {
    name:"Chatbox"
}
</script>


<style scoped>

    .chatbox{
        position: fixed;
        right: 6%;
        bottom: 12%;
    }

    p{
        font-family: input-mono,monospace;
        font-weight: 400;
        font-style: normal;
        color: white;
        font-size: 1.5rem;
        padding: 2%;
    }

    h3{
        font-family: good-times,sans-serif;
        font-weight: 700;
        font-style: normal;
        color: white;
        position: absolute;
        bottom: -15%;
        right: 15%;
    }

    button{
        position: absolute;
        bottom: -15%;
        background-color: #F07D00;
        color: white;
        font-size: 1rem;
        border: none;
        height: 12%;
        cursor: pointer;
        border-radius: 2px;
    }
    .container{
        width: 700px;
        height: 200px;
        background-color: #F07D00;
        position: relative;
        border-radius: 2px;
    }

    .happy_iimersive{
        width: 22%;
        position: absolute;
        bottom: -15%;
        right: -10%;
    }

</style>