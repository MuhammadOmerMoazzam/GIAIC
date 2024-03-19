"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var promptSync = require("prompt-sync");
var prompt = promptSync();
// Welcoming Note to the customer
console.log("\n\"Welcome To MUHAMMAD OMER MOAZZAM's Cafe\" \n");
// function to display the summary of the order
function customer_items(sandwich_details) {
    console.log("\n\tORDER SUMMARY");
    // for...in loop to access key of object
    for (var sandwich in sandwich_details) {
        console.log("You ordered the \"".concat(sandwich, "\" with the following items:"));
        // for...of loop to access value of the key
        for (var _i = 0, _a = sandwich_details[sandwich]; _i < _a.length; _i++) {
            var items = _a[_i];
            console.log("-".concat(items));
        }
    }
}
// making an array of available items
var available_items = [
    "Lettuce",
    "Pickles/Cucumbers",
    "Mustard",
    "Olives",
    "Onions",
    "Fried Egg",
    "Chicken",
    "Cheese",
];
// display available items to the customer
console.log("Below are the available items for sandwiches:\n", available_items);
// object to store the order
var order = {};
// nos --> number_of_sandwiches customer wants to order
var nos = parseInt(prompt("Enter number of sandwiches you would like to order:"));
for (var i = 1; i <= nos; i++) {
    console.log("\n'Sandwich ".concat(i, "' "));
    // variable to store Ingredients for each sandwich
    var Ingredients = [];
    // noi --> number_of_ingredients customer wants to order
    var noi = parseInt(prompt("Enter number of ingredients for Sandwich".concat(i, ": ")));
    for (var i_1 = 1; i_1 <= noi; i_1++) {
        var ingredient = prompt("Enter ingredients" + i_1.toString() + ": ");
        Ingredients.push(ingredient);
    }
    // Save the sandwich details in the order object
    order["Sandwich".concat(i)] = Ingredients;
}
// main function
function main() {
    // calling the function customer_items to display the summary of the order
    customer_items(order);
}
// calling the main function
main();
