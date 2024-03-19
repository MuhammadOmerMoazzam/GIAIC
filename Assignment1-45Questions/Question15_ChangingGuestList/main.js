// making an array of invitees
var invitees = ["Muhammad", "Taha", "Moazzam"];
// sending invitations
for (var _i = 0, invitees_1 = invitees; _i < invitees_1.length; _i++) {
    var i = invitees_1[_i];
    console.log("Welcome", i, "you are invited to the dinner.");
}
// Taha can't make to the dinner
console.log("\n", invitees[1], "can't make it to the dinner.\n");
// updating the list: replacing the guest who can't make it to the dinner(Taha)
// with a new guest(Omer).
invitees[1] = "Omer";
// sending new set of invitations
console.log("New set of invitations");
for (var _a = 0, invitees_2 = invitees; _a < invitees_2.length; _a++) {
    var i = invitees_2[_a];
    console.log("Welcome", i, "you are invited to the dinner.");
}
