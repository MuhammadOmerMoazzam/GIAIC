// making a function called show_magicians to display magician 
var show_magicians = function (names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
};
// making an array of magicians names
var names = [
    "Magician1",
    "Magician2",
    "Magician3",
];
// calling the function show_magician with an array names as an argument
show_magicians(names);
