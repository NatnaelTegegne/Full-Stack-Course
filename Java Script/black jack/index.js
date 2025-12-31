let player = {
    name : "Nate",
    chips : 145
}

let cards = []
let sum = 0
let gameOver = false;
let hasBlackJack = false;
let message = "";



let messageEl = document.getElementById("message-el");
let cardElement = document.getElementById("cards-el");
let sumElement = document.querySelector("#sum-el");
let playerEl = document.querySelector("#player-el");




playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
        let randomInt = Math.floor(Math.random() * 13) + 1;
        if (randomInt === 1) {
            return 11;
        } else if (randomInt > 10) {
            return 10;
        } else {
            return randomInt;
        }
        
}

function startGame() {
        //this function only runs once
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards.push(firstCard);
        cards.push(secondCard);
        sum = firstCard + secondCard
    
    
    //this overwrites the function with a new version that does nothing
    startGame = function () {
        renderGame();
        isGameStarted = true;
    }
    

}



function renderGame() {
    cardElement.textContent = " "
    for (let i = 0; i < cards.length; i++) {
        cardElement.textContent += cards[i] + " ";
    }
    
    sumElement.textContent = sum;

    if (sum > 21) {
        message = "You're out of the game";
        gameOver = true;
        } else if (sum === 21) {
            message = "You've got black jack"
            hasBlackJack = true;
        } else {
            message = "Do you want to draw a new card?"
        }
    messageEl.textContent = message;
}


function newCard() {
    if (!gameOver && isGameStarted) {
        let card = getRandomCard();
        sum += card;
        cards.push(card);
        renderGame();
    }
}



//======Practice========
let person = {
    name: "Natnael",
    age: 22,
    country: "Ethiopia"
}

function logData() {
    console.log(person.name + " is " + person.age + " years old and lives in " + person.country);
}

logData();
