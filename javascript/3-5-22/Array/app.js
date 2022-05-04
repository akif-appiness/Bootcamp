const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"];
leaderboard[1] = "Luna";
leaderboard[3] = "Draco";
// The elements @ 1&3 index get replaced with Luna & Draco

// Push Pop Shift & Unshift
const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"];
planets.shift(); //Removes The Moon form array
planets.push("Saturn"); //Adds Saturn to the end of array
planets.unshift("Mercury"); //Adds Mercury @ the begining of the array

// Concat
const setA = [1, 2, 3];
const setB = [4, 5, 6];
const setC = setA.concat(setB);
console.log(setC);
// Includes
console.log(setB.includes(5)); //gives true or false
// IndexOf
console.log(setA.indexOf(3)); //gives the index of element
// Reverse
console.log(setB.reverse()); //Reverse the array

// Slice
let colors = ["Red", "Green", "Blue", "Yellow", "Orange", "Purple", "Voilet"];

console.log(colors.slice(2, 4)); //Gives the speicified elements @ the index

// Splice
//Removeing elements using splice
console.log(colors.splice(6, 1)); //removes Voilet from the array here 6 specifies the index number & 1 is the number of elements needed to be removed
console.log(colors);
//Adding elements using splice
console.log(colors.splice(1, 0, "Indigo")); //1 is the index no 0 is the no of elements needed to be removed and indigo is the element that is added to the array
console.log(colors);
// Deleting & Adding
console.log(colors.splice(2, 2, "Deleted")); //This will remove Green & Blue From the array and the add Deleted to the array

// Sort
let score = [55, -8, 88, 5, 7, -17, 98, 11, 30];
console.log(score.sort()); //sorts numbers from asending to desending order

// Multideimensional ARRAY
let gameBoard = [
  ["X", null, "X"],
  ["0", null, "X"],
  ["0", "0", "X"],
];
console.log(gameBoard);
//Accessing null of second array can be done as follows
console.log(gameBoard[1][1]);

// Exercise on Nested Arrays
// DO NOT TOUCH!!! (please)
const airplaneSeats = [
  ["Ruth", "Anthony", "Stevie"],
  ["Amelia", "Pedro", "Maya"],
  ["Xavier", "Ananya", "Luis"],
  ["Luke", null, "Deniz"],
  ["Rin", "Sakura", "Francisco"],
];

airplaneSeats[3].splice(1, 1, "Hugo"); //This will add Hugo into the place of null
