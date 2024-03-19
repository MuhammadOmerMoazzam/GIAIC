// making an array of users and admin
let usernames: string[] = [
    "User1",
    "User2",
    "User3",
    "User4",
    "Admin",
];

// using for...of loop to iterate and send message to the usernames
for (let i of usernames) {
    // applying condition to check if the user is admin or not
    if (i === "Admin" ){
        console.log(`Hello Admin, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${i}, thank you for logging in again.`);
    }
} 
