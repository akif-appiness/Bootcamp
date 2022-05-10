// While loop
let count = 0;
while (count < 10) {
  count++;
  console.log(count);
}

const pass = "Legend";
let guess = prompt("Enter Password");
while (guess !== pass) {
  guess = prompt("Enter Password");
}
console.log("Correct Password!!!!!");
