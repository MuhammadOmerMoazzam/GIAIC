// Name: Muhammad Omer Moazzam
// classSlot: monday 7pm to 10pm
// Conditional Tests
// ---- Test 1
// making a list of invitees
let invitees = ['Muhammad', 'Omer', 'Moazzam'];
// taking user input to check whether the guest is invited or not
let userInputGuest = "Omer";
console.log(invitees.includes(userInputGuest) ? "(True) Invited" : "Accessed Denied!");
// ---- Test 2
let numberOfInvitees = invitees.length;
if (numberOfInvitees <= 3) {
    console.log(`(True) Enough space.`);
}
else {
    console.log(`No more space.`);
}
// ---- Test 3
// Checking if a variable is undefined
let z;
console.log(z === undefined ? "(True) z is undefined and not initialized" : "isFalse");
// ---- Test 4
let num1 = 6;
let num2 = "6";
let result = num1 + num2;
console.log(result === "66" ? "(True) Because of concatenation" : "isFalse");
// ---- Test 5
let a = 10;
let b = a++;
console.log(b === 10 ? "(True) Because of Post Incremnet" : "isFalse");
// ---- Test 6
let c = 10;
let d = ++c;
console.log(d === 10 ? "isTrue" : "(False) Because of Pre Incremnet");
// ---- Test 7
let name = "Omer";
console.log(name.startsWith("H") ? "isTrue" : `(False) name startsWith("O")`);
// ---- Test 8
let fullName = "Muhammad Omer Moazzam";
console.log(fullName.endsWith("a") ? "isTrue" : `(False) fullName endsWith("m")`);
// ---- Test 9
let percentage = 89;
let GPA = 3.84;
let batch = "Fall";
if (percentage >= 86 && GPA > 3.66 && batch === "Spring") {
    console.log("Eligible for current scholarship");
}
else {
    console.log("(False) Apply in next batch"); // this will be executed as condition is false
}
// ---- Test 10
// Comparing arrays for equality
let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1 === arr2 ? "isTrue" : "(False) Because of reference equality arr1 !== arr2");
export {};
