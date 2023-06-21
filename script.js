function getComputerChoice() {
    const numChoice = Math.round(Math.random() * 2) + 1;

    if (numChoice === 1) {
        return "Rock";
    } else if (numChoice === 2) {
        return "Paper";
    } else if (numChoice === 3) {
        return "Scissors";
    }
}