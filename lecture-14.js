// Introduction of JavaScript
console.log("My console statement");

// Syntax and declaration
var score = 30;
var result = "50"; // Changed to a string for illustration
const PI = 3.14;

console.log(score);
console.log(result);
console.log(PI);

// Data types
// ...

// Using let for block-scoping
let score = 30;
let result = "10";

// BEDMAS
let finalScore = score + parseInt(result); // Parse result to ensure it's treated as a number
console.log(finalScore);

let penality = score - parseInt(result); // Parse result to ensure it's treated as a number
console.log(penality);

console.log(typeof penality);

let totalGames = 5;
let avgScore = finalScore / totalGames;
console.log(avgScore);
console.log(typeof avgScore);

let value = ((finalScore ** 2) * 10 / (penality + totalGames))
console.log(value);

// If totalGames is 'five'
let totalGamesString = 'five';
let parsedTotalGames = parseInt(totalGamesString); // Parse totalGames to ensure it's treated as a number

if (!isNaN(parsedTotalGames)) {
  // Check if the parsed value is a valid number
  console.log(value);
} else {
  console.log("Invalid totalGames value. Please provide a valid number.");
}