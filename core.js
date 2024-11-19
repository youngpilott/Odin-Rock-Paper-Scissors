"use strict";

console.log("Hello World");

function getComputerChoice() {
    console.log(Math.floor(Math.random() * 3))
}

function getHumanChoice() {
    console.log(prompt("what is your choice?"));
}

function playRound(humanChoice, computerChoice) {
    
}
let humanScore, computerScore = 0
let humanChoide = getComputerChoice()
let computerChoice = getHumanChoice()

playRound()