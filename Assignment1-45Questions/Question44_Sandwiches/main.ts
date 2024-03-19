import promptSync = require("prompt-sync");

const prompt = promptSync();

// Welcoming Note to the customer
console.log("\n\"Welcome To MUHAMMAD OMER MOAZZAM's Cafe\" \n");

// function to display the summary of the order
function customer_items(sandwich_details: {[key:string]:string[]}) {
    console.log("\n\tORDER SUMMARY");
    // for...in loop to access key of object
    for (let sandwich in sandwich_details) {
        console.log(`You ordered the \"${sandwich}\" with the following items:`);
        // for...of loop to access value of the key
        for (let items of sandwich_details[sandwich]) {
            console.log(`-${items}`);
        }
    }
}

// making an array of available items
let available_items: string[] = [
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
let order: {[key: string]:string[]} = {}

// nos --> number_of_sandwiches customer wants to order
let nos:number = parseInt(prompt("Enter number of sandwiches you would like to order:"));

for (let i=1; i<=nos; i++) {
    console.log(`\n\'Sandwich ${i}\' `);

    // variable to store Ingredients for each sandwich
    let Ingredients: string[] = [];

    // noi --> number_of_ingredients customer wants to order
    let noi:number = parseInt(prompt(`Enter number of ingredients for Sandwich${i}: `));

    for (let i=1; i<=noi; i++) {
        let ingredient:string = prompt("Enter ingredients" + i.toString() + ": " );
        Ingredients.push(ingredient);
    }

    // Save the sandwich details in the order object
    order[`Sandwich${i}`] = Ingredients;
}

// main function
function main() {

// calling the function customer_items to display the summary of the order
customer_items(order);

}

// calling the main function
main()