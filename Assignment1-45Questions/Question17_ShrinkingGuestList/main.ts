// list of invitees
let invitees = [
    'newGuest1',
    'Muhammad',
    'newGuest2',
    'Omer',
    'Moazzam',
    'newGuest3',
];

// displaying list of invitees
console.log("Current list of invitees");
for (let i of invitees) {
  console.log("Hi!",i,"you are invited to the dinner.");
}

// message to infrom about the late arrival of dinner table
console.log("\nBigger Dinner table won\'t arrive in time, So I can only invite two people for the dinner.");

// Removing guests until only two are left
for (let i=0; i<invitees.length+2; i++) {
    console.log("Sorry!", invitees.pop() , "I can\'t invite you to the dinner." );
}

// Informing the remaining two guests, that they are still invited
console.log("\nThe invitees are below:");

for (let i of invitees) {
    console.log("Congratulations", i, "you are still invited to the dinner.");
}

// Removing the remaining last two names from the list
for (let i=0; i<=invitees.length; i++) {
    invitees.pop();
}

// displaying the final empty list
console.log("\nThe final empty list of invitees:", invitees);