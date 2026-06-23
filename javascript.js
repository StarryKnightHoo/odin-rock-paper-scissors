let computerChoice = "no input";
let humanChoice = "no input";
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let choice = Math.random();
    if (choice <= 0.33) {
        computerChoice = "rock";
    } else if (choice > 0.33 && choice <= 0.66) {
        computerChoice = "paper";
    } else if (choice > 0.66) {
        computerChoice = "scissors";
    }
}

function getHumanChoice() {
    humanChoice = prompt("What will you play?");
}

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a draw!");
        } else if (computerChoice == "paper") {
            computerScore++;
            console.log("You lose! Paper beats Rock");
        } else {
            humanScore++;
            console.log("You win! Rock beats Scissors");
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            console.log("You win! Paper beats Rock");
        } else if (computerChoice == "paper") {
            console.log("It's a draw!");
        } else {
            computerScore++;
            console.log("You lose! Scissors beat Paper")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            console.log("You lose! Rock beats Scissors");
        } else if (computerChoice == "paper") {
            humanScore++;
            console.log("You win! Scissors beat Paper");
        } else {
            console.log("It's a draw!");
        }
    }

}

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";

let body = document.body;
body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

rock.addEventListener("click", function() {
    getComputerChoice();
    playRound("rock", computerChoice);
});
paper.addEventListener("click", function() {
    getComputerChoice();
    playRound("paper", computerChoice);
});
scissors.addEventListener("click", function() {
    getComputerChoice();
    playRound("scissors", computerChoice);
});
