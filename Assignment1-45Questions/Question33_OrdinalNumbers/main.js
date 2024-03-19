// making an array of numbers from 1 to 9
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var i = numbers_1[_i];
    // for 1st
    if (i === 1) {
        console.log("".concat(i, "st"));
    }
    // for 2nd
    else if (i === 2) {
        console.log("".concat(i, "nd"));
    }
    // for 3rd
    else if (i === 3) {
        console.log("".concat(i, "rd"));
    }
    // for 4th and so on...
    else {
        console.log("".concat(i, "th"));
    }
}
