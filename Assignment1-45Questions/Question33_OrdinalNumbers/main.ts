// making an array of numbers from 1 to 9
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numbers) {
    // for 1st
    if (i === 1) {
        console.log(`${i}st`);
    }
    // for 2nd
    else if (i === 2) {
        console.log(`${i}nd`);
    }
    // for 3rd
    else if (i === 3) {
        console.log(`${i}rd`);
    }
    // for 4th and so on...
    else {
        console.log(`${i}th`);
    }
}