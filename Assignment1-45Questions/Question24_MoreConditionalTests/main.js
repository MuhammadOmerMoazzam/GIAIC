// More Conditional Tests
// Tests for equality and inequality with strings
let str1 = 'hello';
let str2 = 'world';
console.log("Is str1 === str2? I predict False.");
console.log(str1 === str2); // false
console.log("Reinitializing str2 = \"hello\"");
str2 = "hello";
console.log("Is str1 === str2? I predict True.");
console.log(str1 === str2); // true
// Tests using the toLowerCase() function
let text = 'HELLO';
console.log("Is text.toLowerCase() === 'hello'? I predict True.");
console.log(text.toLowerCase() === 'hello'); // true
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2); // true
console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2); // false
console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2); // true
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2); // false
// Tests using "and" (&&) and "or" (||) operators
let isRainy = true;
let isCold = false;
console.log("Is isRainy && isCold? I predict False.");
console.log(isRainy && isCold); // false
console.log("Is isRainy || isCold? I predict True.");
console.log(isRainy || isCold); // true
// Test whether an item is in an array ---> arrayName.includes(item) 
let fruits = ['apple', 'banana', 'orange'];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana')); // true 
// Test whether an item is not in an array ---> ! arrayName.includes(item) 
let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log("Is 'potato' not in the vegetables array? I predict True.");
console.log(!vegetables.includes('potato')); // true
export {};
