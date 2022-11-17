<template>

    <div class="chatbox">
        <div class="container">
            <p id="message1" class="chat active">> Salut !</p>
            <p id="message2" class="chat">> Test !</p>
            <p id="message3" class="chat">> 25456 !</p>
            <img class="happy_iimersive" src="../assets/img/happy_iimersive.png" alt="IIMersive happy face icon">
            <h3>IIMersive</h3>
            <button @click="activechat()">Suivant</button>
        </div>
    </div>

</template>


<script>
export default {
    name:"Chatbox",
    data: function() {
        return {
            i: 1
        }
    },
    methods : {
        activechat() {
            this.i++
            document.getElementById('message' + (this.i - 1)).classList.remove("active")
            var selected_message = document.getElementById('message' + this.i);
            selected_message.classList.add("active");
            return this.i
        }
    }
}
</script>


<style scoped>
.chat {
    display: none;
}

.active  {
    display: flex;
}
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