// Question40: making a function called show_magicians to display magician 
var show_magicians = function (names) {
    for (var _i = 0, names_1 = names; _i < names_1.length; _i++) {
        var name_1 = names_1[_i];
        console.log(name_1);
    }
};
// Question42: Unchanged Magicians
var new_array = [];
var make_great = function (names) {
    for (var i = 0; i < names.length; i++) {
        var x = "Great" + names[i];
        new_array.push(x);
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
// 
make_great(names);
// calling the show_magician function for original array
console.log("\nshow_magicians(names)");
show_magicians(names);
// calling the show_magician function for new_array
console.log("\nshow_magicians(new_array)");
show_magicians(new_array);
// displaying that original array is Unchanged
console.log("\nnames =", names);
