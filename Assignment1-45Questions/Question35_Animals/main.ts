// making an array of animals
let dairyAnimals: string[] = [
    "Cow",
    "Goat",
    "Sheep",
];

// using for loop to iterate and display the name of each animal in the list
console.log("The list of dairy animals includes:");

for (let i of dairyAnimals) {
    console.log(i);
}

// dislaying a message for each animal
for (let i of dairyAnimals) {
    console.log(`\nA ${i} would make a great pet.`);
}

// displaying a message stating what these animals have in common.
console.log("\nAny of these dairy animals would make a valuable addition to a farm!");