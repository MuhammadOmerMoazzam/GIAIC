// making an array of favourite pizza flavours
var pizza_flavours = [
    "pepperoni",
    "fajita",
    "mexican",
];
// using for loop to print the names of pizza_flavours
for (var i = 0; i < pizza_flavours.length; i++) {
    console.log(pizza_flavours[i]);
}
// modifying for loop to print a message instead of just names of pizza_flavours
for (var _i = 0, pizza_flavours_1 = pizza_flavours; _i < pizza_flavours_1.length; _i++) {
    var i = pizza_flavours_1[_i];
    console.log("I like ".concat(i, " pizza."));
}
// statement about the kinds of pizza I like
console.log("\nI really like ".concat(pizza_flavours[0], " pizza.\nThe classic, ").concat(pizza_flavours[1], " pizza is always a great choice.\nThe ").concat(pizza_flavours[2], " pizza has a delicious combination of flavors.\n"));
// statement about how much I love pizza
console.log("I really love pizza!");
