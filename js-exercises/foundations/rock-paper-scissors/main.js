console.log("Hello World")

function getComputerChoice() {
    let rand = Math.random()
    if (rand < 1/3) {
        return "R"
    } else if (rand < 2/3) {
        return "S"
    } else {
        return "P"
    }
}