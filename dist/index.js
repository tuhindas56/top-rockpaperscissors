"use strict";
function getComputerChoice() {
    const allOutcomes = ["ROCK", "PAPER", "SCISSORS"];
    const outcome = allOutcomes[Math.floor(Math.random() * allOutcomes.length)];
    return outcome;
}
function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const askPlayer = prompt("Rock, Paper or Scissors?", "");
        if (askPlayer == null) {
            return alert("Cancelled!");
        }
        else if (askPlayer == "") {
            return alert("Field cannot be empty!");
        }
        else if (askPlayer.toUpperCase() !== "ROCK" && askPlayer.toUpperCase() !== "SCISSORS" && askPlayer.toUpperCase() !== "PAPER") {
            return alert("Invalid. Please try again!");
        }
        else {
            const playerSelection = askPlayer.toUpperCase();
            const computerSelection = getComputerChoice();
            function rockPaperScissors(playerSelection, computerSelection) {
                if ((playerSelection == "PAPER" && computerSelection == "ROCK") || (playerSelection == "SCISSORS" && computerSelection == "PAPER") || (playerSelection == "ROCK" && computerSelection == "SCISSORS")) {
                    playerScore += 1;
                    return `You chose ${playerSelection} and Computer chose ${computerSelection}, you win!`;
                }
                else if (playerSelection == computerSelection) {
                    return `You chose ${playerSelection} and Computer chose ${computerSelection}, its a draw!`;
                }
                else {
                    computerScore += 1;
                    return `You chose ${playerSelection} and Computer chose ${computerSelection}, computer wins!`;
                }
            }
            alert(rockPaperScissors(playerSelection, computerSelection));
        }
    }
    if (playerScore > computerScore) {
        alert(`You win with a score of ${playerScore}`);
    }
    else if (playerScore == computerScore) {
        alert("It's a draw!");
    }
    else {
        alert(`Computer wins with a score of ${computerScore}`);
    }
}
playGame();
