"use strict";
let current_users = [
    "Muhammad",
    "Omer",
    "Moazzam",
    "Sultan",
    "Ahmed",
];
let new_users = [
    "SULTAN",
    "Taha",
    "Hadi",
    "ahmed",
    "Arham",
];
// making a function to ensure that everyone has a unique username
function checkUsers(new_users, current_users) {
    for (let i = 0; i < new_users.length; i++) {
        let usernameExists = false;
        let newUser = new_users[i];
        // applying nested loop for case-insensitiveness
        for (let j = 0; j < current_users.length; j++) {
            if (current_users[j].toLowerCase() === newUser.toLowerCase()) {
                usernameExists = true;
                break;
            }
        }
        if (usernameExists) {
            console.log(`${newUser}, username has already been used, enter a new username`);
        }
        else {
            console.log(`${newUser}, username is available`);
        }
    }
}
;
// calling the function checkUsers
checkUsers(new_users, current_users);
