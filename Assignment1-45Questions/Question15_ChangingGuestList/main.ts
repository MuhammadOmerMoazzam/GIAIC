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
