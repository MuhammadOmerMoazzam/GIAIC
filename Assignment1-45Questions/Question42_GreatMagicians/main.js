// Question40: making a function called show_magicians to display magician 
var show_magicians = function (names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
};
// Question41: making a function called make_great to modify the original array of names
var make_great = function (names) {
    for (var i = 0; i < names.length; i++) {
        names[i] = "Great" + names[i];
    }
};
// making an array of magicians names
var names = [
    "Magician1",
    "Magician2",
    "Magician3",
];
// displaying original array
console.log("names =", names);
// passing names array as an argument to make_great function 
// (Pass By Reference) --> original array is also modified
make_great(names);
// calling the show_magician function to show change in original array
show_magicians(names);
// displaying the original array to show it has been modified
console.log("names =", names);
