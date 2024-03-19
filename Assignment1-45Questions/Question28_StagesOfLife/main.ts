// making a variable to store the Age of the person
let age: number = 18;

// applying conditional statements to determine the stage of person' life based on the age
if (age < 2) {
    console.log("Person is a Baby");
}
else if (age>=2 && age<4) {
    console.log("Person is a Toddler");
}
else if (age>=4 && age<13) {
    console.log("Person is a Kid");
}
else if (age>=13 && age<20) {
    console.log("Person is a Teenager");
}
else if (age>=20 && age<65) {
    console.log("Person is a Adult");
}
else if (age >= 65) {
    console.log("Person is a Elder");
}