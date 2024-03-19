// storing name in a variable
let personName:string = "Muhammad Omer Moazzam";

// ------ displaying name in lowercase
console.log("Lower Case:", personName.toLowerCase());

// ------ displaying name in uppercase
console.log("Upper Case:", personName.toUpperCase());

// ------ displaying name in titlecase
// making a function for titlecase as there is no built-in function for tilecase in TS
// using charAt(pos: number) and slice() method
const toTitleCase = (_value: string)=> {
    let words = _value.split(" ");
    let result = ""; 
    for (let word of words) {
        result += (word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + " " );
    }

    return result.trim() // to remove trailing (ending) spaces
}

// display result
console.log("Title Case:", toTitleCase(personName) );
