// Select buttons 
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let btn3 = document.querySelector(".btn3");
let resultsDiv = document.querySelector(".results");
let scoreDiv = document.querySelector(".score");



// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to generate computer's choice
function getComputerChoice() {
    let rand = Math.random();
    if (rand < 1 / 3) {
        return "Rock";
    } else if (rand < 2 / 3) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

// Function to play 
function playRound(humanChoice) {
    // Stop game if someone already won
    if (humanScore >= 5 || computerScore >= 5) {
        return;
    }

    // Get computer choice
    let computerChoice = getComputerChoice();

    // Initialize result string
    let result = "";

    // Determine round outcome
    if (humanChoice === computerChoice) {
        result = "Tie !!! Draw Again!";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
        humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
        computerScore++;
    }

    // Update results 
    resultsDiv.textContent = result;

    // Update scores 
    scoreDiv.textContent = `Score: You = ${humanScore}, Computer = ${computerScore}`;

    // Check who won
    if (humanScore === 5) {
        resultsDiv.textContent = "You are the Winner!";
    } else if (computerScore === 5) {
        resultsDiv.textContent = "Computer Wins!";
    }
}

// Add onclick handlers for each button
btn1.onclick = function() {
    playRound("Rock");
};

btn2.onclick = function() {
    playRound("Paper");
};

btn3.onclick = function() {
    playRound("Scissor");
};
