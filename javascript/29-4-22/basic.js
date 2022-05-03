// Numbers
(13 % 5) ** 2; //Output will be 9 modulus of 13%5 ie 3 will be multiply twice
4 + (6 * 2) / 2; //Output will be 10 first multiplication will be performed then division & then addition
200 + 0 / 0; //Output will be NaN bcuz any oparation with NaN will be NaN

// Variable & let
let a = 2;
let b = 5;
c = a + b; //output will be 7
// Excercise on let
let myLuckyNumber = 37;
let octopusLimbs = 8;
// updating variable
let score = 5;
score++; //this will increment the variable score
// Const
const boilingPointC = 100;
const boilingPointF = 212;
// Strings
let bestColor = "purple";
let quote = 'You had me at "hello"';

// String Methods
// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
var whisper = message.toLowerCase().trim();
//whisper will be taste the rainbow

// More exercise on string methods
const word = "skateboard";

// YOUR CODE BELOW THIS LINE:
var facialHair = word.slice(5, 10).replace("o", "e");

// Exercise on String Template Literal

// NO TOUCHING! (please)
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6

// YOUR CODE BELOW THIS LINE:
var roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
