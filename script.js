// Used for easy access to game choices
const GameChoices = {
    Rock: "Rock",
    Paper: "Paper",
    Scissors: "Scissors"
}

// Gets the choice of the computer
function getComputerChoice() {
    // randomize the choice
    const numChoice = Math.round(Math.random() * 2) + 1;

    // associate possible random values with possible choices
    if (numChoice === 1) {
        return GameChoices.Rock;
    } else if (numChoice === 2) {
        return GameChoices.Paper;
    } else if (numChoice === 3) {
        return GameChoices.Scissors;
    }
}

// Plays one round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    const formattedPlayerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // Check if there is a tie
    if (formattedPlayerSelection === computerSelection) {
        return "You must think like a computer. You tied with " + computerSelection;
    } else if (formattedPlayerSelection === GameChoices.Rock) {  // Check possibilities against Rock
        if (computerSelection === GameChoices.Paper) {  // Rock against Paper
            return "You lost this round! Paper beats Rock"
        } else if (computerSelection === GameChoices.Scissors) {  // Rock against Scissors
            return "You win this round! Rock beats Scissors"
        }
    } else if (formattedPlayerSelection === GameChoices.Paper) {  // Check possibilities against Paper
        if (computerSelection === GameChoices.Rock) {  // Paper against Rock
            return "You win this round! Paper beats Rock"
        } else if (computerSelection === GameChoices.Scissors) {  // Paper against Scissors
            return "You lose this round! Scissors beats Paper"
        }
    } else if (formattedPlayerSelection === GameChoices.Scissors) {  // Check possibilities against Scissors
        if (computerSelection === GameChoices.Rock) {  // Scissors against Rock
            return "You lose this round! Rock beats Scissors"
        } else if (computerSelection === GameChoices.Paper) { // Scissors against Paper
            return "You win this round! Scissors beats Paper"
        }
    } else {  // Check possibility of wrong entry
        return "Sorry. This is not an option! Please try again."
    }
}

const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));