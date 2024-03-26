#! usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 15000; // in dollars
let myPin = 1234; // storing original pin as myPin
// taking user input for pinAnswer to access account
const pinAnswer = await inquirer.prompt([
    {
        name: "pinNumber",
        type: "number",
        message: "Enter your pin number: "
    }
]);
// applying conditional statement based on pinAnswer
if (pinAnswer.pinNumber === myPin) {
    console.log('Correct pin number');
    // taking input for operation (withdraw or check balance)
    let operationChoice = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "Please select operation",
            choices: ["withdraw", "check balance"]
        }
    ]);
    // making decesion based on opeartionAnswer
    if (operationChoice.operation === "withdraw") {
        // taking input for amount to withdraw
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                message: "Select amount to withdraw:",
                choices: [500, 1000, 5000, 10000, "Or Enter Desired Amount"]
            }
        ]);
        // making choice for deduction based on options to withdraw
        if (amountAnswer.amount === 500) {
            myBalance -= 500;
            console.log(`\nYour remaining balance is: ${myBalance}`);
        }
        else if (amountAnswer.amount === 1000) {
            myBalance -= 1000;
            console.log(`\nYour remaining balance is: ${myBalance}`);
        }
        else if (amountAnswer.amount === 5000) {
            myBalance -= 5000;
            console.log(`\nYour remaining balance is: ${myBalance}`);
        }
        else if (amountAnswer.amount === 10000) {
            myBalance -= 10000;
            console.log(`\nYour remaining balance is: ${myBalance}`);
        }
        else if (amountAnswer.amount === "Or Enter Desired Amount") {
            // taking input for desiredAmount
            const desiredAmountAnswer = await inquirer.prompt([
                {
                    name: "desiredAmount",
                    type: "number",
                    message: "Enter amount to withdraw: "
                }
            ]);
            // if ammount is greater than myBalance, show Error.
            if (desiredAmountAnswer.desiredAmount > myBalance) {
                console.log("Error, Insufficient Balance!");
            }
            // else Account has sufficient balance then withdraw and deduct the amount
            else {
                // subtracting amount from myBalance
                myBalance -= desiredAmountAnswer.desiredAmount;
                // display remaining balace after deducting desiredAmount
                console.log(`\nYour remaining balance is: ${myBalance}`);
            }
        }
    }
    else if (operationChoice.operation === "check balance") {
        // showing balance
        console.log(`Your balance is: ${myBalance}`);
    }
}
else {
    console.log('Incorrect pin number'); // in case of invalid pin number
}
