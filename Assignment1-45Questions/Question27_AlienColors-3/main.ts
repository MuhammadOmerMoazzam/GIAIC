// declaring a variable to store alien color
let alien_color: string ;

// making a function to give points based on the color
const checkColor = (color: string)=> {
    // applying multiple conditional statements
    if (color === "green") {
        console.log("You earned 5 points.");
    }
    else if (color === "yellow") {
        console.log("You earned 10 points.");
    }
    else if (color === "red") {
        console.log("You earned 15 points.");
    }
    else {
        null; // no output if color is other than green, yellow or red.
    }
}

// call the function checkColor()

// Version 1 
alien_color = "green";
checkColor(alien_color);

// Version 2
alien_color = "yellow";
checkColor(alien_color);

// Version 3
alien_color = "red";
checkColor(alien_color);
