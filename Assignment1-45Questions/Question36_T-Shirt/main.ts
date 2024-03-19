import promptSync = require("prompt-sync");

const prompt = promptSync();

// function called make_shirt() that accepts a size and a message to be printed on T-Shirt 
const make_shirt = (size:string, message:string)=> {
    console.log(`The size of the shirt is: \"${size}\" \nThe message to be printed is: \"${message}\"`);
}

// Taking user input for size and message for T-Shirt
let size: string = prompt("Enter the size of T-Shirt (large, medium, small): ");
let message: string = prompt("Enter a message to be printed on the shirt: ");

// calling the function make_shirt to display the details of T-Shirt
make_shirt(size, message);