// var length = 16;                               // Number
// var lastName = "Johnson";                      // String
// var x = {firstName:"John", lastName:"Doe"};    // Object
//
// // When adding a number and a string, JavaScript will treat the number as a string.
// var x = 16 + "Volvo";
// var y = "Volvo" + 16;
//
// // JavaScript evaluates expressions from left to right. Different sequences can produce different results.
// var x1 = 16 + 4 + "Volvo";
// var y1 = "Volvo" + 16 + 4;
//
// // JavaScript has dynamic types. This means that the same variable can be used to hold different data types.
// var x2;           // Now x is undefined
// x2 = 5;           // Now x is a Number
// x2 = "John";      // Now x is a String
//
// // You can use quotes inside a string, as long as they don't match the quotes surrounding the string.
// var answer1 = "It's alright";             // Single quote inside double quotes
// var answer2 = "He is called 'Johnny'";    // Single quotes inside double quotes
// var answer3 = 'He is called "Johnny"';    // Double quotes inside single quotes
// var lastname, lastName, last_name; // JavaScript is Case Sensitive
// lastName = "Doe"; // camelCase
// lastname = "Peterson";
// last_name = "Johnson"; // snake_case
// // last-name = "Otto"; // not allowed
//
//
// // Exercise
// var answer4 = answer1 + answer2;
// var answer5 = answer1 + ". " + answer2;
//
// // Booleans can only have two values: true or false.
// var x3 = 5;
// var y3 = 5;
// var z3 = 6;
//
// // Exercise
// (x3 == y3);
// (x3 == z3);
// (x3 === y3);
//
// // JavaScript arrays are written with square brackets []. Array items are separated by commas.
// var cars = ["Saab", "Volvo", "BMW"];
//
// // Exercise
// cars[0];
// cars[1];
// cars[2];
// cars[3];
//
// // Exercise
// cars[0] = "Opel";
// let length = cars.length;
// cars[length - 1];
// cars[length] = "Toyota";
// cars[cars.length + 2] = "Daihatsu";
// cars.length;
//
// // JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.
// var myProfile3 = "John Doe";
// var myProfile2 = {firstName: "John", lastName: "Doe", eyeColor: "blue"};
// var myProfile = {
//   firstName: "John",
//   lastName: "Doe",
//   eyeColor: "blue",
//   cars: ["Saab", "Volvo", "BMW"],
//   fullName : function() {
//     return this.firstName + " " + this.lastName;
//   }
// };
//
// // Exercise
// myProfile.firstName;
// myProfile.lastName;
// myProfile.cars.join(', ');
//
// myProfile.city = "Jakarta";
// myProfile.age = 30;
// myProfile["age"] = 35;
// myProfile.fullName();

// Javascript Events
function greetings() {
  alert('Selamat Datang!');
};

var data = ['John', 'Doe', 30];

function show() {
  document.getElementById("demo").innerHTML = data.join(', ');
}
