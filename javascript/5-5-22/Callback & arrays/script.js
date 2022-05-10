// For each
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

numbers.forEach(function (el) {
  if (el % 2 === 0) {
    console.log(el);
  }
});

// Map

const double = numbers.map(function (num) {
  return num * 2;
});
console.log(double);

// Exercise on Map
const fullNames = [
  { first: "Albus", last: "Dumbledore" },
  { first: "Harry", last: "Potter" },
  { first: "Hermione", last: "Granger" },
  { first: "Ron", last: "Weasley" },
  { first: "Rubeus", last: "Hagrid" },
  { first: "Minerva", last: "McGonagall" },
  { first: "Severus", last: "Snape" },
];

const firstNames = fullNames.map(function (el) {
  return el.first; //this will return the first names form the fullNames
});

// Arrow functions

const add = (x, y) => {
  return x + y;
};

const square = (z) => {
  return z * z;
};
console.log(square(8));

const rollDie = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(rollDie());

const greet = (name) => {
  return `Hey ${name}!`;
};

// Implicit return in arrow function
// This works only when we have single expression to return from a function
const mul = (c, d) => c * d;
console.log(mul(2, 6));

// SetTimeOut
console.log("HELLO!!!!");
setTimeout(() => {
  console.log(".....Are Uh Their");
}, 3000); //Hello will be printed after 3000 mili seconds
console.log("BYE!!!");

// SetInterval
// setInterval(() => {
//   console.log(Math.random()); //This will generate a random number every 2sec In order to stop it we need to use clearId by assigning ID to the
// }, 2000);

// Filter
const newNum = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const filter = newNum.filter((n) => {
  return n < 10;
});
console.log(filter);

const movies = [
  {
    title: "Amadeus",
    score: 99,
    year: 1984,
  },
  {
    title: "Sharknado",
    score: 35,
    year: 2013,
  },
  {
    title: "13 Going On 30",
    score: 70,
    year: 2004,
  },
  {
    title: "Stand By Me",
    score: 85,
    year: 1986,
  },
  {
    title: "Waterworld",
    score: 62,
    year: 1995,
  },
  {
    title: "Jingle All The Way",
    score: 71,
    year: 1996,
  },
  {
    title: "Parasite",
    score: 95,
    year: 2019,
  },
  {
    title: "Notting Hill",
    score: 77,
    year: 1999,
  },
  {
    title: "Alien",
    score: 90,
    year: 1979,
  },
];

const badMovies = movies.filter((m) => m.score < 70);
const recentMovies = movies.filter((m) => m.year > 2000);
console.log(badMovies);

// Arrow functions & this
const person = {
  firstName: "Jack",
  lastName: "Parker",
  fullName: () => {
    return `${this.firstName}${this.lastName}`; //this will throw an error because the variables are assigned outside the scope of the functions
  },
};

// Default parameteres: This is used when we want to assign a default value to the parameter if the user doesn't define it
// function rollDie(numSides = 6) {
//   return Math.floor(Math.random() * numSides + 1);
// }

// Spread function:used to sperate into arguments
const numb = [13, 15, 8, 9, 7, 45, 63, 58, 2, 48];

console.log(Math.max(...numb));
console.log(..."Hello");

// Spread on array literals
const cats = ["Blue", "Rusty", "Bucky"];
const dogs = ["Wyatt", "Ronny"];
const allPets = [...cats, ...dogs];
console.log(allPets);

// Spread on Objects: in objects if we have same key value then value of the assigned variable gets replaced by values of object second
const personA = { firstName: "Huge", lastName: "Jackman", age: 56 };
const personB = { firstName: "Jhonny", lastName: "Deep", age: 52 };
const people = { ...personA, ...personB };
console.log(people);

// Destructuring:used to separete the elemnts of an array
const scores = [92931, 89931, 88845, 77275, 54361, 24351, 11145];
const [gold, silver, bronze] = scores;
console.log(gold); //this will show us the firts index element of an array

// Destructuring on objects
const user = {
  email: "abc@mail.com",
  password: "abc@123",
  firstName: "Harvey",
  lasName: "Spector",
  born: 1932,
  died: 1978,
  city: "bangalore",
};

const { email } = user;
console.log(email);
