#! /usr/bin/env node 

// SHAHBANG --> #! // session-3 (to publish code)

import inquirer from "inquirer";

// await --> means wait (i.e stop at that line and take info from the user)
const answer = await inquirer.prompt([
  { message: "Enter first number:: ", type: "number", name: "firstNumber" },
  { message: "Enter second number:: ", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation:: ",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Divison"],
  },
]);

// applying conditional statements
if (answer.operator === "Addition") {
    console.log("Your value is " + (answer.firstNumber + answer.secondNumber) );
}
else if (answer.operator === "Subtraction") {
    console.log("Your value is " + (answer.firstNumber - answer.secondNumber));
}
else if (answer.operator === "Multiplication") {
    console.log("Your value is " + (answer.firstNumber * answer.secondNumber));
}
else if (answer.operator === "Divison") {
    console.log("Your value is " + (answer.firstNumber / answer.secondNumber));
}
else {
    console.log("Invalid choice! select relevant operator.");
}