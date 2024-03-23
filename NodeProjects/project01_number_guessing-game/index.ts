#! /usr/bin/env node

import inquirer from "inquirer";

// generating random number
const randomNumber = Math.floor(Math.random() * 10 + 1);

// // taking user input
const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "Guess a Number between 1 to 10: " },
]);

// applying conditional statement
if (answer.userGuessedNumber === randomNumber) {
  console.log(`Congratulations! you guessed the right number.`);
} else {
  console.log(
    `Sorry! you guessed wrong number. The correct number was ${randomNumber}. Lets try again.`
  );
}
