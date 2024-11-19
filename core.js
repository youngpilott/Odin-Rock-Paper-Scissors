"use strict";

console.log("Hello World");

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    console.log(computerChoice);
    if (computerChoice == 1) {
        computerChoice = "rock";
    } if (computerChoice == 2) {
        computerChoice = "paper"
    }
     else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("what is your choice?");
    console.log(humanChoice);
    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        return computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        return humanScore++;
    }
}
let humanScore = 0;
let computerScore = 0;
let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();

playRound(humanChoice, computerChoice)
console.log(humanScore, computerScore);
