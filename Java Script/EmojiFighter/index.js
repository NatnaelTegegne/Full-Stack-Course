let fighters = ["🐍", "🦍", "🐺", "🦁", "🦓", "🐸", "🐘", "🐢", "🐊", "🐋", "🦧", "🐯"]

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton")

fightButton.addEventListener("click", function () {
    let randomIndex1 = Math.floor(Math.random * fighters.length)
    let randomIndex2 = Math.floor(Math.random * fighters.length)
    stageEl.textContent = fighters[randomIndex1] + " Vs " + fighters[randomIndex2]
})