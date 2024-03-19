// making an array of favourite fruits
let favourite_fruits: string[] = [
    "apple",
    "banana",
    "mango",
];

// variable to store a fruit on which conditional statement is applied
// 1.
let fruit: string = "mango";

if (favourite_fruits.includes(fruit.toLowerCase())) {
    console.log(`You really like ${fruit}!`);
}

// 2.
fruit = "apple";

if (favourite_fruits.includes(fruit.toLowerCase())) {
    console.log(`You really like ${fruit}!`);
}

// 3.
fruit = "banana";

if (favourite_fruits.includes(fruit.toLowerCase())) {
    console.log(`You really like ${fruit}!`);
}

// 4.
fruit = "orange";

if (favourite_fruits.includes(fruit.toLowerCase())) {
    console.log(`You really like ${fruit}!`);
}

// 5.
fruit = "grapes";

if (favourite_fruits.includes(fruit.toLowerCase())) {
    console.log(`You really like ${fruit}!`);
}