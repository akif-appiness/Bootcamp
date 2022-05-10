function printHeart() {
  console.log("<3");
}
printHeart();

//Functions with arguments
function rant(message) {
  for (let i = 0; i < 3; i++) {
    console.log(message.toUpperCase());
  }
}
console.log(rant("hello"));

// Functions with multiple arguments
function greet(firstName, lastName) {
  console.log(`Hey there, ${firstName} ${lastName[0]}`);
}

console.log(greet("Jack", "Parker"));

// Multiple arguments exercise
function isSnakeEyes(numA, numB) {
  if (numA === 1 && numB === 1) {
    console.log("Snake Eyes!");
  } else {
    console.log("Not Snake Eyes!");
  }
}
console.log(isSnakeEyes(1, 5));

// Return
function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  let sum = x + y;
  return sum;
}
console.log(add(5, "b"));

// Exercise on return
function multiply(numC, numD) {
  return numC * numD;
}

function isShortsWeather(temperature) {
  if (temperature >= 75) {
    return true;
  } else {
    return false;
  }
}

// Function to return the last element of array
function lastElement(array) {
  if (array.length === 0) {
    return null;
  } else {
    return array[array.length - 1];
  }
}

// Function to capitalize first letter
function capitalize(str) {
  let firstLetter = str.slice(0, 1).toUpperCase();
  let restStr = str.slice(1);
  return firstLetter + restStr;
}

// Function for sum of arrays
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// Function on return day
function returnDay(num) {
  const days = [
    null,
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return num > 0 && num <= 7 ? days[num] : null;
}
console.log(returnDay(5)); //This will return Friday

// Function scope If we define a variable within the function we cannot access it outside of the function
let scope = "Global";
function intern() {
  let scopeIn = "Inside";
  console.log(scopeIn);
}
console.log(intern());
// console.log(scopeIn);

// Block scope: The variable assigned within a particular block can be accessable within it only we cannot have its access outside of that block
let block = 6;
if (block > 5) {
  let msg = "Hello";
  console.log(msg);
}

// Lexical scope: a function nested within a function has all the access to its parent's variable
function bankRobbery() {
  const superHeros = ["Batman", "Superman", "Spiderman"];
  function cryForHelp() {
    for (let hero of superHeros) {
      console.log(`Please Help, ${hero.toUpperCase}`);
    }
  }
  cryForHelp();
}
bankRobbery();

// Function Expression: In this way we assign a function to a variable
const mul = function (x, y) {
  return x * y;
};
console.log(mul(4, 25));

const square = function (x) {
  return x * x;
};

// Higer order Functions: This used to pass function into them
function callTwice(func) {
  func();
  func();
}

function callTenTimes(f) {
  for (let i = 0; i < 10; i++) {
    f();
  }
}

function rollDie() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}

callTwice(rollDie);
callTenTimes(rollDie);

// Returning Functions

function makeMysteryFunc() {
  const rand = Math.random();
  if (rand > 0.5) {
    return function () {
      console.log("Good Function");
    };
  } else {
    return function () {
      alert("Bad Functions");
    };
  }
}

makeMysteryFunc();

// Method
const myMath = {
  PI: 3.147,
  squa(numb) {
    return numb * numb;
  },
  cube(numb) {
    return numb ** 3;
  },
};
// Exercise on methods
const squar = {
  area(side) {
    return side * side;
  },
  perimeter(side) {
    return side * 4;
  },
};

// This

const cat = {
  name: "Corey",
  color: "Gery",
  breed: "Persian",
  meow() {
    console.log(`${this.name} says MEOW`);
  },
};
console.log(cat.meow());

// Egglaying exercise
const hen = {
  name: "Helen",
  eggCount: 0,
  layAnEgg() {
    this.eggCount++;
    return "EGG";
  },
};

// Try/Catch
// hello.toUpperCase(); //this will throw an error if we don't want the error we try & catch so the rest of the code gets executed

try {
  hello.toUpperCase();
} catch {
  console.log("ERROR CAUGHT!!!!");
}
