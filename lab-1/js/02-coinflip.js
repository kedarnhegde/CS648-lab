const coinFlip = Math.random(); // comment this line and uncomment next line for solid whole number method.
// const coinFlipInt = Math.floor(Math.random() * 2);

const result = coinFlip < 0.5 ? "heads" : "tails"; // comment this line and uncomment next line for solid whole number method.
// const result = coinFlipInt ? "heads" : "tails";

const choice = prompt('Choose "Heads" or "Tails":').trim().toLowerCase();

if (result === "heads" && choice === "heads") {
  alert("The flip was heads and you chose heads...you win!");
} else if (result === "heads" && choice === "tails") {
  alert("The flip was heads but you chose tails...you lose!");
} else if (result === "tails" && choice === "heads") {
  alert("The flip was tails but you chose heads...you lose!");
} else if (result === "tails" && choice === "tails") {
  alert("The flip was tails and you chose tails...you win!");
} else {
  alert('Invalid choice. Please enter "Heads" or "Tails".');
}
