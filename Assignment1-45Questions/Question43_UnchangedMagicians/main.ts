// Question40: making a function called show_magicians to display magician 
const show_magicians = (names:string[])=> {
    for (let name of names) {
        console.log(name);
    }
}

// Question42: Unchanged Magicians
let new_array: string[] = []

const make_great = (names:string[])=> {
    for (let i=0; i<names.length; i++) {
        let x = "Great"+ names[i];
        new_array.push(x);
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

// 
make_great(names);

// calling the show_magician function for original array
console.log(`\nshow_magicians(names)`);
show_magicians(names);

// calling the show_magician function for new_array
console.log(`\nshow_magicians(new_array)`);
show_magicians(new_array);

// displaying that original array is Unchanged
console.log("\nnames =", names);
