"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// function called make_shirt() that accepts a size and a message to be printed on T-Shirt 
var make_shirt = function (size, message) {
    console.log("The size of the shirt is: \"".concat(size, "\" \nThe message to be printed is: \"").concat(message, "\""));
};
// Taking user input for size and message for T-Shirt
var size = prompt("Enter the size of T-Shirt (large, medium, small): ");
var message = prompt("Enter a message to be printed on the shirt: ");
// calling the function make_shirt to display the details of T-Shirt
make_shirt(size, message);
