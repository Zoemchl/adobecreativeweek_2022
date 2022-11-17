<template>
    <section class="top_sec">
        <div class="clock">
            <div id="timer" class="timer"></div>
        </div>
    </section>
</template>

<script>
addEventListener('DOMContentLoaded', (event) => {
    // Compte a reboure 
    const departMinutes = 20
    let temps = departMinutes * 60
    //  récuperation de l'id
    const timerElement = document.getElementById("timer")

    //  appelle de manière répétée la fonction
    setInterval(() => {
        let minutes = parseInt(temps / 60, 10)
        let secondes = parseInt(temps % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        secondes = secondes < 10 ? "0" + secondes : secondes

        timerElement.innerText = `${minutes}:${secondes}`
        temps = temps <= 0 ? 0 : temps - 1
    }, 1000)
});
</script>

<style scoped> 

.top_sec{
    display: flex;
    justify-content: center;
}
.clock{
    background-color: white;
    opacity: 0.8;
    display: flex;
    justify-content: center;
    border-radius: 2px;
}

.timer{
    color: #2D2D2D;
    font-size: 1.5rem;
    font-family: input-mono,monospace;
    font-weight: 400;
    font-style: normal;
}

</style>