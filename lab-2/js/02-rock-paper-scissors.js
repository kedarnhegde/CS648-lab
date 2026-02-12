// User choice
const userChoice = prompt("Choose rock, paper, or scissors:")
  ?.trim()
  .toLowerCase();

// for invalid choice
if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
  alert('Invalid choice. Please type "rock", "paper", or "scissors".');
} else {
  // Computer choice (0,1,2 -> rock/paper/scissors)
  const compNum = Math.floor(Math.random() * 3);
  let computerChoice = "";

  if (compNum === 0) computerChoice = "rock";
  else if (compNum === 1) computerChoice = "paper";
  else computerChoice = "scissors";

  // 3) Determine winner
  let message = `You chose ${userChoice}. Computer chose ${computerChoice}. `;

  if (userChoice === computerChoice) {
    message += "It's a tie!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "scissors" && computerChoice === "paper") ||
    (userChoice === "paper" && computerChoice === "rock")
  ) {
    message += "You win!";
  } else {
    message += "Computer wins!";
  }

  alert(message);
}
