console.log("Hello World")

function getComputerChoice() {
    const rand = Math.random()
    if (rand < 1/3) {
        return "R"
    } else if (rand < 2/3) {
        return "S"
    } else {
        return "P"
    }
}

function getHumanChoice() {
    return prompt("Please enter your choice out of R/P/S to play.")
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();

    if (humanChoice === computerChoice) {
        console.log("It's a tie! You both picked " + humanChoice)
        return 0
    } else if (humanChoice === "R" && computerChoice === "P") {
        console.log("You lose! Paper beats Rock.")
        return -1
    } else if (humanChoice === "P" && computerChoice === "S") {
        console.log("You lose! Scissors beats Paper.")
        return -1
    } else if (humanChoice === "S" && computerChoice === "R") {
        console.log("You lose! Rock beats Scissors.")
        return -1
    } else if (computerChoice === "R" && humanChoice === "P") {
        console.log("You win! Paper beats Rock.")
        return 1
    } else if (computerChoice === "P" && humanChoice === "S") {
        console.log("You win! Scissors beats Paper.")
        return 1
    } else if (computerChoice === "S" && humanChoice === "R") {
        console.log("You win! Rock beats Scissors.")
        return 1
    } else {
        console.log("This should never be printed. :)")
        return 0
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

let res = playRound(humanSelection, computerSelection);
if (res === 1) {
    humanScore += 1
} else if (res === -1) {
    computerScore += 1
}