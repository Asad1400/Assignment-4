"use strict";
/*
    Name: Muhammad Asad Ullah
    Roll No. PIAIC240373
    City: Lahore
    Batch: 57
    Quarter: 1
*/
// 1. Declare a variable named greeting with the string value "Hello, World!" and print it.
let greeting = "Hello, World!"; // Declaring a variable named greeting and assigning it a string value "Hello, World!"
console.log(greeting); //Printing greeting
console.log();
// 2. Define two variables with integer values and calculate their sum, difference, product, and quotient.
let num1, num2; // Declaring two variables num1 and num2 of type number
num1 = 10; // Assigning value 10 to num1
num2 = 5; // Assigning value 5 to num2
let sum = num1 + num2; // Calculating sum of num1 and num2 // 10 + 5 = 15
let difference = num1 - num2; // Calculating difference of num1 and num2 // 10 - 5 = 5
let product = num1 * num2; // Calculating product of num1 and num2 // 10 * 5 = 50
let quotient = num1 / num2; // Calculating quotient of num1 and num2 // 10 / 5 = 2
console.log("Sum: ", sum); // Printing sum
console.log("Difference: ", difference); // Printing difference
console.log("Product: ", product); // Printing product
console.log("Quotient: ", quotient); // Printing quotient
console.log();
// 3. Swap the values of two variables without using a third variable.
let a = 1, b = 2; // Declaring two variables a and b of type number and assigning them values 1 and 2 
console.log("Before Swapping: ", "a: ", a, " b: ", b); // Printing values of a and b before swapping
a = a + b; // Adding value of b to a // 1 + 2 = 3
b = a - b; // Subtracting value of b from a and assigning it to b // 3 - 2 = 1
a = a - b; // Subtracting value of b from a and assigning it to a // 3 - 1 = 2
console.log("After Swapping: ", "a: ", a, " b: ", b); // Printing values of a and b after swapping
console.log();
// 4. This applies to TypeScript. Create a string variable and try changing its type.
//let message : string = 50;// Declaring a variable message of type string and assigning it a number value 50
//console.log(message);// Printing message
// 5. Use the modulus operator to find the remainder of two numbers.
let remainder = num1 % num2; // Calculating remainder of num1 and num2 // 10 % 5 = 0
console.log("Remainder: ", remainder); // Printing remainder
console.log();
// 6. Increment a variable's value by 1 using two different methods.
let counter = 0;
counter += 1; // Incrementing counter by 1
counter++;
console.log("Counter: ", counter); // Printing counter
console.log();
// 7. Given three boolean variables, write expressions for AND, OR, and NOT gates.
let a1 = true, b1 = false, c1 = true; // Declaring three boolean variables a1, b1, and c1 and assigning them true, false, and true
let andGate = a1 && b1 && c1; // AND gate // true && false && true = false // First the AND gate is applied to a1 and b1 which results in false and then the AND gate is applied to the result of the previous AND gate and c1 which results in false because the associativity of and operator is left to right
let orGate = a1 || b1 || c1; // OR gate // true || false || true = true // First the OR gate is applied to a1 and b1 which results in true and then the OR gate is applied to the result of the previous OR gate and c1 which results in true because the associativity of or operator is left to right
let notGate = !a1; // NOT gate // !true = false
console.log("AND Gate: ", andGate); // Printing AND gate
console.log("OR Gate: ", orGate);
console.log("NOT Gate: ", notGate);
console.log();
// 8. Show examples of using compound assignment operators.
let num = 10; // Declaring a variable num of type number and assigning it a value 10
num += 5; // num = num + 5 // 10 + 5 = 15
console.log("Compound Assignment Operator +=: ", num); // Printing num
num -= 5; // num = num - 5 // 15 - 5 = 10
console.log("Compound Assignment Operator -=: ", num); // Printing num
num *= 5; // num = num * 5 // 10 * 5 = 50
console.log("Compound Assignment Operator *=: ", num); // Printing num
num /= 5; // num = num / 5 // 50 / 5 = 10
console.log("Compound Assignment Operator /=: ", num); // Printing num
console.log();
// 9. Write a program to check if a number is even or odd.
let number = 10; // Declaring a variable number of type number and assigning it a value 10
if (num % 2 === 0) { // If the number is divisible by 2 and the remainder is 0 then it is even
    console.log(`${num} is Even`);
}
else { // If the number is not divisible by 2 and the remainder is not 0 then it is odd
    console.log(`${num} is Odd`);
}
console.log();
// 10. Check if a person is eligible to vote.
let personAge = 18; // Declaring a variable personAge of type number and assigning it a value 18
// Checking if the person is eligible to vote
if (personAge >= 18) { // If the age is greater than or equal to 18 then the person is eligible to vote
    console.log("Eligible to Vote");
}
else { // If the age is less than 18 then the person is not eligible to vote
    console.log("Not Eligible to Vote");
}
console.log();
// 11. Assign a grade based on a numerical score.
let score = 85;
// Assigning grade based on numerical score
if (score >= 90) { // If the score is greater than or equal to 90 then the grade is A
    console.log("Grade: A");
}
else if (score >= 80) { // If the score is greater than or equal to 80 then the grade is B
    console.log("Grade: B");
}
else if (score >= 70) { // If the score is greater than or equal to 70 then the grade is C
    console.log("Grade: C");
}
else if (score >= 60) { // If the score is greater than or equal to 60 then the grade is D
    console.log("Grade: D");
}
else { // If the score is less than 60 then the grade is F
    console.log("Grade: F");
}
console.log();
// 12. Find the maximum of three numbers.
let x = 10, y = 20, z = 30; // Declaring three variables x, y, and z of type number and assigning them values 10, 20, and 30
// Finding maximum of three numbers
if (x > y && x > z) { // If x is greater than y and x is greater than z then x is the maximum
    console.log("Maximum: ", x);
}
else if (y > x && y > z) { // If y is greater than x and y is greater than z then y is the maximum
    console.log("Maximum: ", y);
}
else { // If z is greater than x and z is greater than y then z is the maximum
    console.log("Maximum: ", z);
}
console.log();
// 13. Check if a given year is a leap year.
let year = 2020; // Declaring a variable year of type number and assigning it a value 2020
// Checking if the year is a leap year
if (year % 4 === 0) { // If the year is divisible by 4 and the remainder is 0 then it is a leap year
    console.log(`${year} is a Leap Year`);
}
else { // If the year is not divisible by 4 and the remainder is not 0 then it is not a leap year
    console.log(`${year} is not a Leap Year`);
}
console.log();
// 14. Write a program that converts temperature from Fahrenheit to Celsius.
let fahrenheit = 88.7;
// Convert temperature from Fahrenheit to Celsius
let celcuis = (fahrenheit - 32) * 5 / 9;
console.log(`${fahrenheit} Farenheit = ${celcuis} Celcuis`);
console.log();
// 15. Check if a number is positive, negative, or zero.
let n = 10;
if (n > 0) { // If Number is greater than zero
    console.log(`${n} is greater than zero`);
}
else if (n < 0) { //If Number is less than zero
    console.log(`${n} is less than zero`);
}
else { // if Number is zero
    console.log(`${n} is zero`);
}
console.log();
// 15. Write a program that prints the multiplication table of a given number up to 10.
let num7 = 10; // Declaring a variable num7 of type number and assigning them values 10
console.log(`The Table of ${num7} upto 10 is`);
for (let i = 0; i <= 10; i++) { //Writing a for loop that will start from 0 and runs until the value of i is 11.
    console.log(`${i} * ${num} = ${num * i}`);
}
console.log();
