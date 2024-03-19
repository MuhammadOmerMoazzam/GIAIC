// making an array of favourite pizza flavours
let pizza_flavours: string[] = [
    "pepperoni",
    "fajita",
    "mexican",
];

// using for loop to print the names of pizza_flavours
for (let i=0; i<pizza_flavours.length; i++) {
    console.log(pizza_flavours[i]);
}

// modifying for loop to print a message instead of just names of pizza_flavours
for (let i of pizza_flavours) {
    console.log(`I like ${i} pizza.`);
}

// statement about the kinds of pizza I like
console.log(`
I really like ${pizza_flavours[0]} pizza.
The classic, ${pizza_flavours[1]} pizza is always a great choice.
The ${pizza_flavours[2]} pizza has a delicious combination of flavors.
`);

// statement about how much I love pizza
console.log("I really love pizza!");