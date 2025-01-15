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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toUpperCase();

    mapChoice = {"R": "Rock", "P": "Paper", "S": "Scissors"}
    if (humanChoice === computerChoice) {
        lastRound.innerText = "Last round: It's a tie! You both picked " + mapChoice[humanChoice] + "."
        return 0
    } else if (humanChoice === "R" && computerChoice === "P") {
        lastRound.innerText = "Last round: You lose! Paper beats Rock."
        return -1
    } else if (humanChoice === "P" && computerChoice === "S") {
        lastRound.innerText = "Last round: You lose! Scissors beats Paper."
        return -1
    } else if (humanChoice === "S" && computerChoice === "R") {
        lastRound.innerText = "Last round: You lose! Rock beats Scissors."
        return -1
    } else if (computerChoice === "R" && humanChoice === "P") {
        lastRound.innerText = "Last round: You win! Paper beats Rock."
        return 1
    } else if (computerChoice === "P" && humanChoice === "S") {
        lastRound.innerText = "Last round: You win! Scissors beats Paper."
        return 1
    } else if (computerChoice === "S" && humanChoice === "R") {
        lastRound.innerText = "Last round: You win! Rock beats Scissors."
        return 1
    } else {
        console.log("This should never be printed. :)")
        return 0
    }
}

function updateScore(button) {
    if (!gameDone) {
        const humanChoice = button.target.innerText.at(0);
        const cpuChoice = getComputerChoice();
        let res = playRound(humanChoice, cpuChoice);
        if (res === 1) {
            humanScore += 1;
        } else if (res === -1) {
            computerScore += 1;
        }
        score.innerText = "Score: " + humanScore + " - " + computerScore;

        if (humanScore === 5) {
            alert("You have won the game! The final score is 5 - " + computerScore);
            gameDone = true;
        } else if (computerScore === 5) {
            alert("You have lost the game! The final score is " + humanScore + " - 5..");
            gameDone = true;
        }
    } else {
        gameDone = false;
        humanScore = 0;
        computerScore = 0;
        lastRound.innerText = "New game!"
        score.innerText = "Score: " + humanScore + " - " + computerScore;
    }
}

const buttons = document.querySelectorAll("button");
let humanScore = 0, computerScore = 0;
let gameDone = false;
buttons.forEach((button) => {
    button.addEventListener("click", updateScore);
});
const lastRound = document.querySelector("#last_round")
const score = document.querySelector("#score")
