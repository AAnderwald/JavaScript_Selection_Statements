console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
/* 
let userInput = window.prompt("Guess my favorite number:");

const number = 18

if (userInput < number) { console.log("That is too low") }

else if (userInput > number) { console.log("That is too high") }

else { console.log("That is correct. Good job guessing.") } 
  
*/





// Exercise 2
let userInput = window.prompt("What month is your birthday in?");

switch (userInput) {
    case "January":
        console.log("Soup Swap Day on Jan 16th");
        break;
    case "February":
        console.log("Chocolate Fondue Day Feb 5th");
        break;
    case "March":
        console.log("Napping Day Mar 15th");
        break;
    case "April":
        console.log("Where PJs to work day Apr 16th");
        break;
    case "May":
        console.log("Twilight Zone Day May 11ht");
        break;
    case "June":
        console.log("Bourbon Day Jun 14th");
        break;
    case "July":
        console.log("National Cheesecake Day Jul 30th");
        break;
    case "August":
        console.log("Ride Like the Wind Day Aug 23rd");
        break;
    case "September":
        console.log("Eat an Extra Dessert Day Sep 4th");
        break;
    case "October":
        console.log("American Beer Day Oct 27th");
        break;
    case "November":
        console.log("Spicy Guacamole Day Nov 14th");
        break;
    case "December":
        console.log("Pretend to Be a Time Traveler Day Dec 8th");
        break;
    default:
        console.log("Didja forget the month?");
}
