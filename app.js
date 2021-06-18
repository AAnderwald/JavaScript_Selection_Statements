console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
 
let userInput = window.prompt("Guess my favorite number: (hint it's between 1 and 30");

const number = 18

if (userInput < number) { console.log("That is too low") }

else if (userInput > number) { console.log("That is too high") }

else { console.log("That is correct. Good job guessing.") } 



// Exercise 2
let month = window.prompt("What your birthday month?");

switch (true) {
    case month == "January" || month == "Jan":
        console.log("Soup Swap Day on Jan 16th");
        break;
    case month == "February" || month =="Feb":
        console.log("Chocolate Fondue Day Feb 5th");
        break;
    case month == "March" || month == "Mar":
        console.log("Napping Day Mar 15th");
        break;
    case month == "April"  || month == "Apr":
        console.log("Where PJs to work day Apr 16th");
        break;
    case month == "May":
        console.log("Twilight Zone Day May 11th");
        break;
    case month == "June"  || month == "Jun":
        console.log("Bourbon Day Jun 14th");
        break;
    case month == "July" ||  month == "Jul":
        console.log("National Cheesecake Day Jul 30th");
        break;
    case month == "August" || month == "Aug":
        console.log("Ride Like the Wind Day Aug 23rd");
        break;
    case month == "September" || month == "Sep":
        console.log("Eat an Extra Dessert Day Sep 4th");
        break;
    case month == "October" || month == "Oct":
        console.log("American Beer Day Oct 27th");
        break;
    case month == "November" || month == "Nov":
        console.log("Spicy Guacamole Day Nov 14th");
        break;
    case month == "December" || month == "Dec":
        console.log("Pretend to Be a Time Traveler Day Dec 8th");
        break;
    default:
        console.log("Didja forget the month?");
}
 //or this way
let month2 = window.prompt("What your birthday month?");

switch (month2) {
    case "January":
    case "Jan":
        console.log("Squirrel Appreciation Day 21st");
        break;
    case "February":
    case "Feb":
        console.log("World Sword Swallowers Day 27th");
        break;
    case "March":
    case "Mar":
        console.log("Dentist’s Day 6th");
        break;
    case "April":
    case "Apr":
        console.log("Read a Road Map Day 5th");
        break;
    case "May":
        console.log("Dance Like a Chicken Day 14th");
        break;
    default:
        console.log("Didja forget the month?");
}

