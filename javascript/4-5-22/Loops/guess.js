let maximum = parseInt(prompt("Guess The NUMBER"));
while (!maximum) {
  maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess!"));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if (guess === "q") break;
  attempts++;
  if (guess > targetNum) {
    guess = prompt("Too high! Enter new guess");
  } else {
    guess = prompt("Too low! Enter a new guess");
  }
}
if (guess === "q") {
  console.log("You Quit");
} else {
  console.log("You Got It!!");
  console.log(`YOU GOT IT!! It took you ${attempts} guesses`);
}
