"use strict";


function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 1) {
        computerChoice = "rock";
    } if (computerChoice == 2) {
        computerChoice = "paper"
    }
     else {
        computerChoice = "scissors"
    }
    console.log("Computer choice: ", computerChoice);
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("what is your choice?");
    console.log("Human choice:", humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {
        return humanScore++;
    } else if (humanChoice == "page" && computerChoice == "rock") {
        return humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "page") {
        return humanScore++;
    } else {
        return computerScore++;
    }
}

let humanScore = 0;
let computerScore = 0;
let round = 0;

while (round < 5) {
    console.log(`====== ROUND ${round + 1} ======`);
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();
    
    if (humanChoice != "rock" && humanChoice != "page" && humanChoice != "scissors") {
        console.log("Invalid Choice");
        break;
    }
    playRound(humanChoice, computerChoice);
    console.log(humanScore, computerScore);
    round++;
}

switch (round) {
    case 5:
        if (humanScore < computerScore) {
            console.log(`Computer is winner with ${computerScore} points`);
        } else {
            console.log(`Computer is winner with ${humanScore} points`);
        }
        break;
    default:
        console.log("NOT enough rounds!");
}

