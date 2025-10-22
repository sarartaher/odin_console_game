const prompt = require("prompt-sync")({ sigint: true }); 

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

function getHumanChoice() {
    let strh = prompt("Make your Choice [Rock, Paper or Scissor]: ");
    strh = strh.charAt(0).toUpperCase() + strh.slice(1).toLowerCase();

    if (strh === "Rock" || strh === "Paper" || strh === "Scissor") {
        return strh;
    } else {
        console.log("Invalid. Please try again!");
        return null;
    }
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("Tie !!! Draw Again!");
        return "tie";
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissor") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissor" && computerChoice === "Paper")
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        return "win";
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        return "lose";
    }
}

// ----- Play 5 rounds -----
let humanScore = 0;
let computerScore = 0;

for (let round = 1; round <= 5; round++) {
    console.log(`\n Round ${round} `);

    let humanChoice = getHumanChoice();
    if (!humanChoice) {
        round--; 
        continue;
    }

    let computerChoice = getComputerChoice();
    console.log("You chose:", humanChoice);
    console.log("Computer chose:", computerChoice);

    let result = playRound(humanChoice, computerChoice);
    if (result === "win") humanScore++;
    else if (result === "lose") computerScore++;

    console.log(`Score: You = ${humanScore}, Computer = ${computerScore}`);
}

// ----- Final result -----
console.log("\nFinal Results:");
if (humanScore > computerScore) {
    console.log(" You are the Winner!");
} else if (humanScore < computerScore) {
    console.log(" Computer Wins!");
} else {
    console.log(" It's a Draw!");
}
