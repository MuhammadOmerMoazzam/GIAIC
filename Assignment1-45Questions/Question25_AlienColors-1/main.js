// making a variable to store alien color
var alien_color = "green";
// making a function to give points based on the color
var checkColor = function (color) {
    // applying conditional statement
    if (color === "green") {
        console.log("Congratulations! you just earned 5 points.");
    }
    else {
        null; // no output if condition is false
    }
};
// call the function checkColor()
// For the Version that passes
alien_color = "green";
checkColor(alien_color);
// For the Version that fails
alien_color = "yellow";
checkColor(alien_color); // returns null (no output)
