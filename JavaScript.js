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
        console.log ("You choosed " + humanChoice + " and the computer choosed " + computerChoice + ".");
        if (humanChoice == "rock") {
            switch (computerChoice) {
                case "rock":
                    console.log ("It's a DRAW! Nobody wins!");
                    break;
                case "paper":
                    console.log ("You LOOSE! Computer earns one point!");
                    computerScore++;
                    break;
                case "scisors":
                    console.log ("You WIN! You earn one point!");
                    humanScore++;
                    break;
            }
        }
        if (humanChoice == "paper") {
            switch (computerChoice) {
                case "rock":
                    console.log ("You WIN! You earn one point!");
                    humanScore++;
                    break;
                case "paper":
                    console.log ("It's a DRAW! Nobody wins!");
                    break;
                case "scisors":
                    console.log ("You LOOSE! Computer earns one point!");
                    computerScore++;
                    break;
            }
        }
        if (humanChoice == "scisors") {
            switch (computerChoice) {
                case "rock":
                    console.log ("You LOOSE! Computer earns one point!");
                    computerScore++;
                    break;
                case "paper":
                    console.log ("You WIN! You earn one point!");
                    humanScore++;
                    break;
                case "scisors":
                    console.log ("It's a DRAW! Nobody wins!");
                    break;
            }
        }
    }

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

playGame();