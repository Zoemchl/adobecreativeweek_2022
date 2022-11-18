<template>

    <div class="chatbox">
        <div class="container">
            <p id="message1" class="chat active">> Salut ! Moi, c’est IIMERSIVE.
                <br>
                > Je suis *Bzz bip bop bop*
                <br>
                > Qu’est ce qu’il...*bip* m’arrive ?!</p>
            <p id="message2" class="chat">> Il semblerait qu’un virus ai endommagé mon système. 
                <br>
                > Des parties de ma mémoire ont comme... disparu !</p>
            <p id="message3" class="chat">> Sans ma mémoire, je ne peux pas accomplir ma mission, qui est de guider les futurs étudiants à la découverte de l’IIM !</p>
            <p id="message4" class="chat">> J’ai besoin de ton aide pour me réparer ! 
                <br>
                > Mais comment *booop* allons-nous faire ?</p>
            <p id="message5" class="chat">> J’ai une idée !
                <br>
                > *Bzzz bilip*</p>
            <p id="message6" class="chat">> Nous allons parcourir l’école à la recherche des différentes salles correspondant à chaque axe.</p>
            <p id="message7" class="chat">> Avec les informations collectés, je pourrai peut-être rétablir mes connexions neuronales électroniques !</p>
            <p id="message8" class="chat">> Regarde là bas ! 
                <br>
                > On peut déjà apercevoir la salle de 3D !</p>
            <p id="message9" class="chat">> Hmmm étrange...</p>
            <p id="message10" class="chat">> Cela ressemble aux plans 3D de mes confrères.
                <br>
                > Essaye de manipuler ces pièces pour trouver quelque chose...</p>
            <p id="message11" class="chat">> Dès que tu penses avoir obtenu une réponse, introduit la dans mon terminal.</p>
            <p id="message12" class="chat">> Bien joué !
                <br>
                > Prenons cette porte et découvrons quelle salle se cache derrière...</p>
            <p id="message13" class="chat">> Oh du code partout ! C'est ma langue maternelle
                <br>
                > Nous sommes chez les Coding & Digital Innovation</p>
            <p id="message14" class="chat">> Je détecte la présence d'un lien dans mon système, clique dessus !
                <br>
                > Alors tu as trouvé le code secret ?</p>
            <p id="message14" class="chat">> Je détecte la présence d'un lien dans mon système, clique dessus !</p>
            <p id="message15" class="chat">> Alors tu as trouvé le code secret ?</p>
            <p id="message16" class="chat">> Cette journée d'intégration a l'air vraiment chouette 
                <br>
                > Restons dans le thème du divertissement et visitons la salle des Jeux Vidéos </p>
            <p id="message17" class="chat">> Génial ! Tu vas pouvoir tester ce jeu</p>
            <p id="message18" class="chat">> Quel personnage de qualité tu viens de créer !</p>
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