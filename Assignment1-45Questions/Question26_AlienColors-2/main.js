// making a variable to store alien color
var alien_color;
// making a function to give points based on the color
var checkColor = function (color) {
    // applying conditional statement
    if (color === "green") {
        console.log("You earned 5 points for shooting the alien.");
    }
    else {
        console.log("You just earned 10 points");
    }
};
// call the function checkColor()
// For the Version that passes
alien_color = "green";
checkColor(alien_color);
// For the Version that fails
alien_color = "yellow";
checkColor(alien_color);
