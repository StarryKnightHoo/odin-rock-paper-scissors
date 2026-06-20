let computerChoice = "no input"
let humanChoice = "no input"

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
    humanChoice = prompt(What will you play?);
}