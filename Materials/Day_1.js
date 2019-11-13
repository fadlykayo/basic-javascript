var length = 16;                               // Number
var lastName = "Johnson";                      // String
var x = {firstName:"John", lastName:"Doe"};    // Object

// When adding a number and a string, JavaScript will treat the number as a string.
var x = 16 + "Volvo";
var y = "Volvo" + 16;

// JavaScript evaluates expressions from left to right. Different sequences can produce different results.
var x1 = 16 + 4 + "Volvo";
var y1 = "Volvo" + 16 + 4;

// JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
var x2;           // Now x is undefined
x2 = 5;           // Now x is a Number
x2 = "John";      // Now x is a String

// You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
var answer1 = "It's alright";             // Single quote inside double quotes
var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
var lastname, lastName, last_name; // JavaScript is Case Sensitive
lastName = "Doe"; // camelCase
lastname = "Peterson";
last_name = "Johnson"; // snake_case
// last-name = "Otto"; // not allowed

// Exercise
var answer4 = answer1 + answer2;
var answer5 = answer1 + ". " + answer2;

// Booleans can only have two values: true or false.
var x3 = 5;
var y3 = 5;
var z3 = 6;

// Exercise
console.log(x3 == y3);
console.log(x3 == z3);
console.log(x3 === y3);

// JavaScript arrays are written with square brackets []. Array items are separated by commas.
var cars = ["Saab", "Volvo", "BMW"];

// Exercise
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);

// Exercise
cars[0] = "Opel";
console.log(cars[0]); // Opel

let length = cars.length;
console.log(cars[length]); // undefined
console.log(cars[length - 1]); // BMW

cars[length] = "Toyota";
console.log(cars[length]); // Toyota

cars[cars.length + 2] = "Daihatsu";

console.log(cars.length); // 7
console.log(cars);

// JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.
var myProfile3 = "John Doe";
var myProfile2 = {firstName: "John", lastName: "Doe", eyeColor: "blue"};
var myProfile = {
  firstName: "John",
  lastName: "Doe",
  eyeColor: "blue",
  cars: ["Saab", "Volvo", "BMW"],
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

// Exercise
console.log(myProfile.firstName);
console.log(myProfile.lastName);
console.log(myProfile.cars.join(', '));

myProfile.city = "Jakarta";
myProfile.age = 30;
myProfile["age"] = 35;

myProfile.fullName();

// Javascript Events
function greetings() {
  alert('Selamat Datang!');
};

var data = ['John', 'Doe', 30];

function show() {
  document.getElementById("demo").innerHTML = data.join(', ');
}
