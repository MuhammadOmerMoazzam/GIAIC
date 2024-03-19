// making an array of users and admin
var usernames = [
    "User1",
    "User2",
    "User3",
    "User4",
    "Admin",
];
// using for...of loop to iterate and send message to the usernames
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var i = usernames_1[_i];
    // applying condition to check if the user is admin or not
    if (i === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(i, ", thank you for logging in again."));
    }
}
