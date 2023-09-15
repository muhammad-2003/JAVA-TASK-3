//! Q1 1. Declare an empty array using JS literal notation to store
// !student names in future

// var literalnotation = [""];
// console.log (literalnotation);

//! Q2. Declare an empty array using JS object notation to store
//! student names in future.

// var objectnotation = new Array ("");
// console.log (objectnotation);

//! Q3. Declare and initialize a strings array.

// var stringarray = ["Apple" , "Banana" , "Mango" , "Cherry"];
// console.log (stringarray);

//! Q4. Declare and initialize a numbers array.

// var numberarray = [1 , 2 , 3 , 4];
// console.log (numberarray);

//! Q5. Declare and initialize a boolean array

// var booleanarray = [true , false , false , true];
// console.log (booleanarray);

//! Q6. Declare and initialize a mixed array.

// var mixedarray = ["Mango" , 3 , false , "Apple"];
// console.log (mixedarray);

//! Q7. Declare and Initialize an array and store available 
//! education qualifications in Pakistan (e.g. SSC, HSC, BCS, 
//! BS, BCOM, MS, M. Phil., PhD). Show the listed 
//! qualifications in your browser like:


// let educationQualifications = [

// ("1) SSC"),
// ("2) HSC"),
// ("3) BCS"),
// ("4) BS"),
// ("5) BCOM"),
// ("6) MS"),
// ("7) M.Phill"),
// ("8) PhD")


// ];

// document.write (educationQualifications)

//! Q8 Write a program to store 3 student names in an array.Take
//!another array to store score of these three students. 
//! Assume that total marks are 500 for each student, display 
// !the scores & percentages of students like:

// var studentname = ["Score of Michael is "];
// var score = [320. , "Percentage:64%" ];
// var studentname2 = ["Score of John is "];
// var score2 = [230. , "Percentage:46%" ];
// var studentname3 = ["Score of Michael is "];
// var score3 = [480. , "Percentage:96%" ];



// document.write (studentname , score , studentname2 , score2 , studentname3 , score3)

//! Q9. Initialize an array with color names. Display the array
//! elements in your browser.

// var color = ["Red" , "Green" , "Blue" , "Purple"];

// document.write (color)






//! a. Ask the user what color he/she wants to add to the
//! beginning & add that color to the beginning of the array.

// color.unshift ("<br> Orange");
// document.write (color)

//! b. Ask the user what color he/she wants to add to the end 
//! & add that color to the end of the array.

// color.push ("<br> White");
// document.write (color)

//! c. Add two more color to the beginning of the array.

// color.unshift ("<br> Brown" , "Grey");
// document.write (color)

//! d. Delete the first color in the array.
// color.shift ();
// document.write (color)

//! e. Delete the last color in the array.

// color.pop ();
// document.write (color)

//! f. Ask the user at which index he/she wants to add a color 
//! & color name. Then add the color to desired 
//! position/index.

// color.splice (3 , 0 , "Silver");
// document.write (color)

//! g. Ask the user at which index he/she wants to delete
//! color(s) & how many colors he/she wants to delete. Then
//! Arrays | JAVASCRIPT
//! remove the same number of color(s) from user-defined
//! position/index. . 

// color.splice (5 , 1);
// document.write (color)

//! Q10. Write a program to store student scores in an array & 
// !sort the array in ascending order using Array’s sort 
// !method

// var studentscore = [320 , 230, 480 , 120];
// document.write (studentscore)
// studentscore.sort ( function (a,b) {
//     return a - b;
// });

//  document.write (studentscore)

//! 11. Write a program to initialize an array with city names. 
//! Copy 3 array elements from cities array to selectedCities 
//! array

// var cities = ["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawer"];
// document.write (cities)
// var selectedCities = [];

// selectedCities = cities.slice (2 ,4);
// document.write (selectedCities)

//? CHAP 12-13

//! Write a program that takes a character (number or string) 
//! in a variable & checks whether the given input is a 
//! number, uppercase letter or lower case letter. (Hint: ASCII 
//! codes:- A=65, Z=90, a=97, z=122).

// let input = prompt("Enter a character:");

// let charCode = input.charCodeAt(0);

// if (charCode >= 48 && charCode <= 57) {
//     alert ("The input is a number.");
// } else if (charCode >= 65 && charCode <= 90) {
//     alert("The input is an uppercase letter.");
// } else if (charCode >= 97 && charCode <= 122) {
//    alert ("The input is a lowercase letter.");
// } else {
//     alert ("The input is not a number, uppercase letter, or lowercase letter.");
// }

//! Q2. Write a JavaScript program that accept two integers and
//! display the larger. Also show if the two integers are equal.

// var num1 = +prompt ("Enter your first integer");
// var num2 = +prompt ("Enter your second integer");

// if (num1 > num2) {
//     alert ("Num 1 is greater");
// }
// else if (num2 > num1) {
//     alert ("Num 2 is greater");
// }
// else {
//     alert ("Both are equal");
// }

//! Q3. Write a program that takes input a number from user & 
//! state whether the number is positive, negative or zero

// var number = +prompt ("Enter number");
// if (number > 0) {
//     alert ("Number is Positive");
// } else if (number < 0) {
//     alert ("Number is negative");
// } else {
//     alert ("Number is zero")
// }

//! 4. Write a program that takes a character (i.e. string of 
    //! length 1) and returns true if it is a vowel, false otherwise

// let vowels = ["a" , "e" , "i" , "o" , "u"];
// let input = prompt ("Enter a Character");

// if (input = vowels) {
//     alert ("It is vowel");
// }
// else if (input != vowels) {
//     alert ("It is not vowel");
// }

//!Q5. Write a program that
//! a. Store correct password in a JS variable.
//! b. Asks user to enter his/her password
//! c. Validate the two passwords:
// !i. Check if user has entered password. If not, then 
// !give message “ Please enter your password”
//! ii. Check if both passwords are same. If they are 
//! same, show message “Correct! The password you 
//! entered matches the original password”. Show 
//! “Incorrect password” otherwise.


// let password = "saylaniweb";
// let userpassword = prompt("Enter your Password");
// if (userpassword === null || userpassword === "" ) {
//     alert ("Please enter your password");
// }
// else if (userpassword === password) {
//     alert ("Your password is correct");
// } else {
//     alert ("Incorrect Password");
// }

var greeting;
var hour = +prompt ("Enter hour");
var hour = 13;
if (hour < 18) {
alert ("Good day");
} else {
alert =("Good evening");
}














