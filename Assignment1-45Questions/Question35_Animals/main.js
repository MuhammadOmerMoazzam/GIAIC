// making an array of animals
var dairyAnimals = [
    "Cow",
    "Goat",
    "Sheep",
];
// using for loop to iterate and display the name of each animal in the list
console.log("The list of dairy animals includes:");
for (var _i = 0, dairyAnimals_1 = dairyAnimals; _i < dairyAnimals_1.length; _i++) {
    var i = dairyAnimals_1[_i];
    console.log(i);
}
// dislaying a message for each animal
for (var _a = 0, dairyAnimals_2 = dairyAnimals; _a < dairyAnimals_2.length; _a++) {
    var i = dairyAnimals_2[_a];
    console.log("\nA ".concat(i, " would make a great pet."));
}
// displaying a message stating what these animals have in common.
console.log("\nAny of these dairy animals would make a valuable addition to a farm!");
