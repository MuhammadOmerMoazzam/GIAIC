// making a function called show_magicians to display the magicians
const show_magicians = (names:string[])=> {
    for (let name of names) {
        console.log(name);
    }
}

// making an array of magicians names
let names: string[] = [
    "Magician1",
    "Magician2",
    "Magician3",
];

// calling the function show_magician with an array names as an argument
show_magicians(names);