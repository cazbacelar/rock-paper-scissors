function computerPlay() {
    const options = ["rock", "paper", "scissors"]
    let pcChoice = options[Math.floor(Math.random() * options.length)]
    return pcChoice
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        return "It's a tie"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper") {
        computerScore++
        return "You lose! Paper beats rock"
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        userScore++
        return "You win! Rock beats scissors"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        userScore++
        return "You win! Paper beats rock"
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        computerScore++
        return "You lose! Scissors beat paper"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        computerScore++
        return "You lose! Rock beats scissors"
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        userScore++
        return "You win! Scissors beat paper"
    } else {
        return "Invalid selection"
    }
}

let userScore = 0
let computerScore = 0
const win = "Congratulations, you win!"
const lose = "Too bad, you lose."
const tie = "It's a tie"

function reportsWinner() {
    if (userScore === computerScore) {
        return tie
    } else if (userScore > computerScore) {
        return win
    } else {
        return lose
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("rock, paper or scissors?")
        const computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
        console.log("Your score: " + userScore)
        console.log("Computer's score: " + computerScore)
    }
    console.log(returnWinner())
}

game()