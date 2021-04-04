// chapter 17-20

// var arr = [];

// var numArry = [0, 1, 2, 3 + "<br>" + 1, 0, 1, 2 + "<br>" + 2, 1, 0, 1];
// document.write(numArry.join(" "));

// var numLine = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// document.write(numLine.join("<br>"));


// var table = +prompt("Enter a number for table");
// var len = +prompt("Length of a table");
// for (i = 1; i <= len; i++) {
//     document.write(table + " x " + i + " = " + (table * i) + "<br>");
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (i = 0; i < fruits.length; i++) {
//     document.write(fruits[i] + "<br>")
// }

// var count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// var reverseCount = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
// var even = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// var odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
// var series = [2 + "k", 4 + "k", 6 + "k", 8 + "k", 10 + "k", 12 + "k", 14 + "k", 16 + "k", 18 + "k", 20 + "k"]
// document.write("<h1>Counting:</h1>" + count);
// document.write("<h1>Reverse COunting:</h1>" + reverseCount);
// document.write("<h1>Eeven:</h1>" + even);
// document.write("<h1>Odd:</h1>" + odd);
// document.write("<h1>Series:</h1>" + series);

// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var match = "no"
// var userInput = prompt("Welcome to Our bakery.What would you like to order sir/ma'am?");
// for (var i = 0; i < A.length; i++) {
//     if (userInput == A[i]) {
//         document.write(userInput + " is <b>available</b> at index " + i + " in our bakery")
//         match = "yes"
//     }
// }
// if (match == "no") {
//     document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery")
// }
//  

// var A = [24, 53, 78, 91, 12];
// var largest = 0;
// for (i = 0; i < A.length; i++) {
//     if (A[i] > largest) {
//         largest = A[i];
//     }
// }
// document.write("Arraay items: " + A + "<br>")
// document.write("The Largest number is " + largest)

// var A = [24, 53, 78, 91, 12];
// var smallest = 100000;
// for (i = 0; i < A.length; i++) {
//     if (A[i] < smallest) {
//         smallest = A[i];
//     }
// }
// document.write("Array items: " + A + "<br>")
// document.write("The smallest number is " + smallest)

// for (i = 5; i <= 100; i += 5) {
//     document.write(i + ",")
// }
//another way
// var numInString = [];
// for (i = 5; i <= 100; i += 5) {
//     numInString.push(i)
// }
// document.write(numInString)

// ************************The End******************************