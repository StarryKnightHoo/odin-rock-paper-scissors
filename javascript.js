function getComputerChoice {
    let choice = Math.random;
    if (choice <= 0.33) {
        choice = "rock";
    } else if (choice <= 0.66) {
        choice = "paper";
    } else {
        choice = "scissors";
    }
}