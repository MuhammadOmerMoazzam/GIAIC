// Original array
let programs = [
    "Billing Software",
    "Password Generator",
    "GUI Calculator",
    "ToDoList",
    "Online Quiz System",
];
// display original array
console.log("\nOriginal array = ", programs);
// intentional error: Accessing an index that doesn't exist
let index = 10;
// In TypeScript (and JavaScript), 
// accessing an out-of-bounds index simply returns undefined without throwing an error. 
console.log("\nprograms[10] = ", programs[index]); // undefined
// correcting the error by checking the array length
if (index >= 0 && index < programs.length) {
    console.log("\nValue at index", index, ":", programs[index]);
}
else {
    console.error("\nIndex error: Index out of bounds");
}
export {};
