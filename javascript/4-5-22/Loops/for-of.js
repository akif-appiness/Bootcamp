const sports = [
  "Cricket",
  "Football",
  "Basketball",
  "Tennis",
  "Hockey",
  "Volleyball",
  "Badminton",
  "Baseball",
  "Rugby",
  "Table Tennis",
];

for (let list of sports) {
  console.log(`Your sport is ${list}`); //Iterate through the array elements
}

// Avoiding nested loop using for-of
const seatingChart = [
  ["Jack", "Paul", "David"],
  ["Ericka", "Donna", "Rose"],
  ["Joey", "Mark", "Ted"],
];
// Using for loop we need to make nested loops as follows
for (let i = 0; i < seatingChart.length; i++) {
  const row = seatingChart[i];
  for (let j = 0; j < row.length; j++) {
    // console.log(row[j]);
  }
}
// We can do the same using for of loop as follows
for (let row of seatingChart) {
  for (let student of row) {
    console.log(student);
  }
}

// For of on string
for (let char of "HELLO WORLD") {
  console.log(char);
}

// Exercise on For of to print square of given numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let square of numbers) {
  console.log(square * square);
}

// For in on objects for of dosn't work on objects

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

for (let list in person) {
  console.log(`${list} is ${person[list]}`);
}
