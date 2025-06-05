let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let i = Math.random() * 3;
    if (i <= 1) {
        return "rock";
    } else if (i <= 2) {
        return "paper"
    } else {
        return "scisors"
    }
}

function getHumanChoice() {
    let i = prompt("Choose between 'rock', 'paper' or 'scisors' :");
    i = i.toLowerCase();
    if (i == "rock" || i == "paper" || i == "scisors") {
        return i;        
    } else {
        console.log ("You entered an invalid answer, you can't participate with " + i + ", Try again.");
        return getHumanChoice();
    }

}

function playRound(humanChoice, computerChoice) {
    if (humanScore < 5 && computerScore < 5) {
        parrafo.textContent = "You choosed " + humanChoice + " - the computer choosed " + computerChoice + ".";
        console.log("You choosed " + humanChoice + " and the computer choosed " + computerChoice + ".");
        if (humanChoice == "rock") {
            switch (computerChoice) {
                case "rock":
                    parrafo2.textContent = "It's a DRAW! Nobody wins!";
                    console.log("It's a DRAW! Nobody wins!");
                    break;
                case "paper":
                    parrafo2.textContent = "You LOOSE! Computer earns one point!";
                    console.log("You LOOSE! Computer earns one point!");
                    computerScore++;
                    break;
                case "scisors":
                    parrafo2.textContent = "You WIN! You earn one point!";
                    console.log("You WIN! You earn one point!");
                    humanScore++;
                    break;
            }
        }
        if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    parrafo2.textContent = "You WIN! You earn one point!";
                    console.log("You WIN! You earn one point!");
                    humanScore++;
                    break;
                case "paper":
                    parrafo2.textContent = "It's a DRAW! Nobody wins!";
                    console.log("It's a DRAW! Nobody wins!");
                    break;
                case "scisors":
                    parrafo2.textContent = "You LOOSE! Computer earns one point!";
                    console.log("You LOOSE! Computer earns one point!");
                    computerScore++;
                    break;
            }
        }
        if (humanChoice == "scisors") {
            switch (computerChoice) {
                case "rock":
                    parrafo2.textContent = "You LOOSE! Computer earns one point!";
                    console.log("You LOOSE! Computer earns one point!");
                    computerScore++;
                    break;
                case "paper":
                    parrafo2.textContent = "You WIN! You earn one point!";
                    console.log("You WIN! You earn one point!");
                    humanScore++;
                    break;
                case "scisors":
                    parrafo2.textContent = "It's a DRAW! Nobody wins!";
                    console.log("It's a DRAW! Nobody wins!");
                    break;
            }
        }
    }
    if (humanScore == 5 || computerScore == 5){
        if (humanScore < computerScore) {
            final.textContent = "You are a looser, next time try a different game!"
            console.log("You are a looser, next time try a different game!");
        } else if (humanScore > computerScore) {
            final.textContent = "You win the match! Here you have a candy as a virtual prize 🍭"
            console.log("You win the match! Here you have a candy as a virtual prize 🍭");
        } else {
            final.textContent = "It is a DRAW, nobody wins, we have two loosers!"
            console.log("It is a DRAW, nobody wins, we have two loosers!");
        }
    }
    human.textContent = humanScore
    computer.textContent = computerScore
}

/*
function playGame() {
    for (let index = 0; index < 5; index++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("Final results are: Human - " + humanScore + " points - and Computer - " + computerScore + " points -.");
    if (humanScore < computerScore) {
        console.log("You are a looser, next time try a different game!");
    } else if (humanScore > computerScore) {
        console.log("You win the match! Here you have a candy as a virtual prize 🍭");
    } else {
        console.log("It is a DRAW, nobody wins, we have two loosers!");
    }
}
*/



function playButton() {
  console.log("pulsado");
  playGame();
}
//const boton = document.querySelector("#btn");
const rock = document.querySelector("#btn_rock");
const paper = document.querySelector("#btn_paper");
const scisors = document.querySelector("#btn_scisors");

//boton.addEventListener("click", playButton);
rock.addEventListener("click", function() {playRound("rock", getComputerChoice())});
paper.addEventListener("click", function() {playRound("paper", getComputerChoice())});
scisors.addEventListener("click", function() {playRound("scisors", getComputerChoice())});

const human = document.querySelector("#human");
const computer = document.querySelector("#computer");
const parrafo = document.querySelector("#parrafo");
const parrafo2 = document.querySelector("#parrafo2");