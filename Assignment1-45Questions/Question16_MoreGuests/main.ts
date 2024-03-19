// making an array of invitees
let invitees = ["Muhammad", "Taha", "Moazzam"];

// sending invitations
for (let i of invitees) {
  console.log("Welcome", i, "you are invited to the dinner.");
}

// Taha can't make to the dinner
console.log("\n", invitees[1], "can't make it to the dinner.\n");

// updating the list: replacing the guest who can't make it to the dinner(Taha)
// with a new guest(Omer).
invitees[1] = "Omer";

// sending new set of invitations
console.log("New set of invitations");
for (let i of invitees) {
  console.log("Welcome", i, "you are invited to the dinner.");
}

// informing invitees about the bigger dinner table
console.log("\nI just found a bigger dinner table. \n\nBelow are some new guests:");

// adding a guest at the START of tha array
// .unshift() == opposite of .push() ; adds element at the beginning of an array (at index 0)
// Both .unshift() and .push() returns new array length
invitees.unshift("newGuest1");

// adding a guest at the MIDDLE of tha array
// .splice() used to insert
// SYNTAX: .splice(position, No of elements to remove, Elements to be added)  
// --> returns an array of deleted items
invitees.splice(2, 0, "newGuest2");

// adding a guest at the END of tha array
// .push(element) in TS == .append(element) in Py
// .push() returns new array length
invitees.push("newGuest3");

// sending new set of invitations
for (let i of invitees) {
    console.log(`Hi! ${i} you are invited to the dinner.`);
}