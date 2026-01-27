const num1 = parseInt(prompt("Enter the first integer:"), 10);
const num2 = parseInt(prompt("Enter the second integer:"), 10);

if (num1 > num2) {
  document.write(num1 + " is larger.");
} else if (num2 > num1) {
  document.write(num2 + " is larger.");
} else {
  document.write("Both numbers are equal.");
}
