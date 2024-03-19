// storing name in a variable
var personName = "Muhammad Omer Moazzam";
// ------ displaying name in lowercase
console.log("Lower Case:", personName.toLowerCase());
// ------ displaying name in uppercase
console.log("Upper Case:", personName.toUpperCase());
// ------ displaying name in titlecase
// making a function for titlecase as there is no built-in function for tilecase in TS
// using charAt(pos: number) and slice() method
var toTitleCase = function (_value) {
    var words = _value.split(" ");
    var result = "";
    for (var _i = 0, words_1 = words; _i < words_1.length; _i++) {
        var word = words_1[_i];
        result += (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " ");
    }
    return result.trim(); // to remove trailing (ending) spaces
};
// display result
console.log("Title Case:", toTitleCase(personName));
