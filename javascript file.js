//initiallizing the First name variable with a prompt and the constant variable with a prompt to the user
// as well as the favorite number from user input
let Fname = prompt("what is your name?: ");
const piValue = 3.1415926;
let myFavNum = prompt("Enter your favorite number: ");

//creation of the final value variable for the area of the circle with the calculations.
let myArea = piValue * (myFavNum * myFavNum);

//printing out to the html page the variables values as well as the message to the visitor
document.write("Hello " + Fname + " Your favorite number is: " + myFavNum + " If that was the radius of a circle, the area of the circle would be: " + myArea);