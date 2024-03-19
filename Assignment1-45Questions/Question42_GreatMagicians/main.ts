// Question40: making a function called show_magicians to display magician 
const show_magicians = (names:string[])=> {
    for (let name of names) {
        console.log(name);
    }
}

// Question41: making a function called make_great to modify the original array of names
const make_great = (names:string[])=> {
    for (let i=0; i<names.length; i++) {
        names[i] = "Great"+ names[i];
    }
}

// making an array of magicians names
let names: string[] = [
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