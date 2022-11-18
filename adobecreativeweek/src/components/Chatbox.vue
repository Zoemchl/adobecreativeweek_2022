<template>

    <div class="chatbox">
        <div class="container">
            <p id="message1" class="chat active">> Salut !</p>
            <p id="message2" class="chat">> Test !</p>
            <p id="message3" class="chat">> 25456 !</p>
            <input placeholder="Le code doit contenir 8 chiffres" id="answer" type="number">
            <button @click="check_answer()">Vérifier votre réponse</button>
            <img class="happy_iimersive" src="../assets/img/happy_iimersive.png" alt="IIMersive happy face icon">
            <h3>IIMersive</h3>
            <button class="next_chat" @click="activechat()">Suivant</button>
        </div>
    </div>

</template>


<script>
export default {
    name:"Chatbox",
    props: {
        currentEnigma: Number,
        resetBtn: Boolean
    },
    data: function() {
        return {
            i: 1,
            check_result: true,
            dev_answer: 28796550,
            troisD_answer: 42781214,
            unity_answer: 12345678,
            check_value: 0,
        }
    },
    methods : {
        activechat() {
            this.i++
            document.getElementById('message' + (this.i - 1)).classList.remove("active")
            var selected_message = document.getElementById('message' + this.i);
            selected_message.classList.add("active");
            return this.i
        },
        check_answer() {
            this.check_result = false
            if (this.currentEnigma === 1) {
                this.check_value = this.troisD_answer
            } else if (this.currentEnigma === 2) {
                this.check_value = this.dev_answer
            } else if (this.currentEnigma === 3) {
                this.check_value = this.unity_answer
            }
            if (document.getElementById('answer').value == this.check_value) {
                this.check_result = true
                this.$emit('changeResult', this.check_result)
                document.getElementById('answer').value = ""
                return this.check_result
            } else {
                this.check_result = false
                this.$emit('changeResult', this.check_result)
                document.getElementById('answer').value = ""
                return this.check_result
            }
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

    .next_chat{
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