
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
    const showComputerChoice = document.querySelector(".computer-choice");
    showComputerChoice.textContent = computerChoice;
    return computerChoice;
}

function getHumanChoice() {
    const selectionButton = document.querySelectorAll(".player-selection");
    let choice = "";
    const showHumanChoice = document.querySelector(".human-choice");
    selectionButton.forEach(button => {
        button.addEventListener("click", (event) => {
            choice = event.target.value;
            console.log(`Clicked choice: ${choice}`);
            showHumanChoice.textContent = choice;
        })
    });
    const round = document.querySelector('button.play-round');
    const showResult = document.querySelector(".show-result");
    const result = document.createElement("h3");
    round.addEventListener("click", function (event) {
        playRound(choice, getComputerChoice());
        if (humanScore === 5 || computerScore === 5) {
            if (humanScore === 5) {
                result.textContent = "Human is winner";
            } else {
                result.textContent = "AI is winner";
            }
            showResult.appendChild(result);
            humanScore = 0;
            computerScore = 0;
            console.log(humanScore, computerScore);
            humanPoint.textContent = humanScore;
            computerPoint.textContent = computerScore;
        }
    });
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Your choice is not valid");
        return;
    }

    if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        humanPoint.textContent = humanScore;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        humanPoint.textContent = humanScore;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        humanPoint.textContent = humanScore;
    } else {
        computerScore++;
        computerPoint.textContent = computerScore;
    }
}

let humanScore = 0;
let computerScore = 0;
const humanPoint = document.querySelector(".human-point");
const computerPoint = document.querySelector(".computer-point");

getHumanChoice();




