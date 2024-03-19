// making an empty array with no users
let users: string[] = [];

// applying coditional statement to check whether array is empty or not using length method

// if array is not empty send messages to users
if (users.length > 0) {
    for (let i of users) {
        if (i === "Admin") {
            console.log(`Hello Admin, would you like to see a status report?`)
        }
        else {
            console.log(`Hello ${i}, thank you for logging in again.`)
        }
    }
}

// else display a message to add some users
else {
    console.log("We need to add some users.");
}