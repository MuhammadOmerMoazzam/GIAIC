import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
const promptSync = __require("prompt-sync");
const prompt = promptSync();
// function called make_shirt() that accepts a size and a message to be printed on T-Shirt 
const make_shirt = (size = "large", message = "I love TypeScript") => {
    console.log(`The size of the shirt is: \"${size}\" \nThe message to be printed is: \"${message}\"`);
};
// Create a large shirt with default message
console.log("\nCreating a Large Shirt with Default Message:");
make_shirt();
// Create a medium shirt with default message
console.log("\nCreating a Medium Shirt with Default Message:");
make_shirt("medium");
// Create a shirt of any size with a custom message
console.log("\nCreating a Custom Shirt with Different Message:");
let size = prompt("Enter the size of T-Shirt (large, medium, small): ");
let message = prompt("Enter a message to be printed on the shirt: ");
make_shirt(size, message);
