const product = {
  name: "Gummy Bears",
  inStock: true,
  price: 1.99,
  flavors: ["grape", "apple", "cherry"],
};

//Accesing an element from an object
console.log(product["price"]);
//Another Way of doing the same is
console.log(product.inStock);

const restaurant = {
  name: "Ichiran Ramen",
  address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
  city: "Brooklyn",
  state: "NY",
  zipcode: "11206",
};
const fullAddress = `${restaurant.address},${restaurant.city},${restaurant.state},${restaurant.zipcode}`;
// Modifying Objects
restaurant.city = "Bangalore";
console.log(restaurant.city);

// For loops
for (let i = 1; i <= 10; i++) {
  console.log(i); //this will print numbers 1-10 here i is variable
}

// Exercise on for loop
// Print out "Da ba dee da ba daa" 6 times, using a for loop
for (let i = 1; i <= 6; i++) {
  console.log("Da ba dee da ba daa");
}

//for loop to print even numbers
for (let j = 2; j <= 20; j += 2) {
  console.log(j);
}

// to print odd nu
for (let k = 1; k <= 22; k += 2) {
  console.log(k);
}

for (let l = 100; l >= 0; l -= 10) {
  console.log(l);
}

for (let m = 10; m <= 1000; m *= 10) {
  console.log(m);
}

for (let n = 25; n >= 0; n -= 5) {
  console.log(n);
}

// Iterating arrays
const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!
for (let e = 0; e < people.length; e++) {
  console.log(people[e].toUpperCase());
}

//Nested loops
for (let o = 1; o <= 5; o++) {
  console.log(`o is: ${o}`);
  for (let p = 1; p < 4; p++) {
    console.log(`p is: ${p}`);
  }
}
