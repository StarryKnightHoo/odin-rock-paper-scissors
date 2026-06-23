let computerChoice = "no input";
let humanChoice = "no input";
let humanScore = 0;
let computerScore = 0;

let body = document.body;

let rock = document.createElement("button");
let paper = document.createElement("button");
let scissors = document.createElement("button");

let results = document.createElement("div");
let score = document.createElement("div");

body.appendChild(rock);
body.appendChild(paper);
body.appendChild(scissors);

body.appendChild(results);
body.appendChild(score);


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

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            results.textContent = "It's a draw!";
        } else if (computerChoice == "paper") {
            computerScore++;
            results.textContent = "You lose! Paper beats Rock";
        } else {
            humanScore++;
            results.textContent = "You win! Rock beats Scissors";
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            humanScore++;
            results.textContent = "You win! Paper beats Rock";
        } else if (computerChoice == "paper") {
            results.textContent = "It's a draw!";
        } else {
            computerScore++;
            results.textContent = "You lose! Scissors beat Paper";
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore++;
            results.textContent = "You lose! Rock beats Scissors";
        } else if (computerChoice == "paper") {
            humanScore++;
            results.textContent = "You win! Scissors beat Paper";
        } else {
            results.textContent = "It's a draw!";
        }
    }
    score.textContent = "human: " + humanScore + "\ncomputer: " + computerScore;

    if (humanScore == 5) {
        alert("Human wins!");
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        alert("Computer wins!")
        humanScore = 0;
        computerScore = 0;
    }

}

rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";


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


