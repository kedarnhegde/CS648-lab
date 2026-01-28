let start = parseInt(prompt("Enter a number to count down from:"), 10);

if (Number.isNaN(start)) {
  console.log("That wasn't a valid number.");
} else {
  for (let i = start; i >= 0; i--) {
    console.log(i);
  }
}
