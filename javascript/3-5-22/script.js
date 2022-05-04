// IF Statement
if (1 + 1 === 2) {
  console.log("Math sucks");
}

let random = Math.random();
if (random < 0.5) {
  console.log("Your number is less than 0.5!!!!");
  console.log(random);
  // The above code executes only if the number is less than 0.5
}
if (random > 0.5) {
  console.log("Your number is Greater than 0.5");
  console.log(random);
}

// To check num is even
function isEven(num) {
  if (num % 2 === 0) {
    console.log("Number is Even");
  }
}

// ELSE IF
const day = "Tuesday";
if (day === "Monday") {
  console.log("This sucks");
} else if (day === "Sunday") {
  console.log("Hurray");
} else {
  console.log("MEH");
}
// Using prompt
// const dayOfWeek = prompt("Enter Day");
// if (dayOfWeek === "Monday") {
//   console.log("This sucks");
// } else if (dayOfWeek === "Sunday") {
//   console.log("Hurray");
// } else {
//   console.log("MEH");
// }

// Exercise
function getColor(phrase) {
  if (phrase === "stop") {
    console.log("red");
  } else if (phrase === "slow") {
    console.log("yellow");
  } else if (phrase === "go") {
    console.log("green");
  } else {
    console.log("purple");
  }
}

// Nesting conditions for validating password

// const password = prompt("Enter Password");
// // First condition to check 6+ characters
// if (password.length >= 6) {
//   // Password containing spaces
//   if (password.indexOf(" ") === -1) {
//     console.log("Valid Password");
//   } else {
//     console.log("PASSWORD CANNOT CONTAIN SPACES!");
//   }
// } else {
//   console.log("PASSWORD TOO SHORT! MUST CONTAIN 6+ CHARACTERS");
// }

// Exercise on nesting
// Change the value of num, so that "YOU GOT ME!" prints out
const num = 102; // THIS IS THE ONLY LINE YOU SHOULD CHANGE :)

// DO NOT TOUCH ANYTHING BELOW (please)
if (num <= 100) {
  if (num >= 50) {
    console.log("HEY!");
  }
} else {
  if (num < 103) {
    if (num % 2 === 0) {
      console.log("YOU GOT ME!");
    }
  }
}

// Truthy & Falsey Value
// const input = prompt("Enter input");
// If user does not enter anything then it is a falsey value or else it is considered as truthy value
// if (input) {
//   console.log("TRUTHY");
// } else {
//   console.log("FALSEY");
// }

// Logical AND (&&)
// const newPassword = prompt("Enter Password");

// if (newPassword.indexOf(" ") === -1 && newPassword.length >= 6) {
//   console.log("Password is valid");
// } else {
//   console.log("Enter a valid password");
// }

// Exercise on AND
const mystery = "Password7";
if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
  console.log("YOU GOT IT!!!");
}

// Logical OR ||
const age = 11;
if (age < 5 || age >= 65) {
  console.log("FREE");
} else if (age < 10) {
  console.log("$10");
} else if (age < 65) {
  console.log("$20");
}

// Logical NOT !
let firstName = prompt("Enter name");
if (!firstName) {
  firstName = prompt("Try Again");
}

// Switch
const date = 2;
switch (date) {
  case 1:
    console.log("Monday");
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
  case 4:
    console.log("Thursday");
  case 5:
    console.log("Friday");
  case 6:
    console.log("Saturday");
  case 7:
    console.log("Sunday");
}
