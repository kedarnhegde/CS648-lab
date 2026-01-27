let coinFlip;

for (let i = 0; i < 10; i++) {
  coinFlip = Math.floor(Math.random() * 2);

  if (coinFlip) {
    console.log("Tails ");
  } else {
    console.log("Heads ");
  }
}
