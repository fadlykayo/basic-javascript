// Examples 1
try {
  alert('Welcome Guest!');
} catch (e) {
  console.log('Server Error. We will fix it soon!');
}

// Examples 2

let message, x;

x = 0

try {
  if (!x && x!== 0) throw 'it\'s empty';
  if (isNaN(x)) throw 'not a number!';
  if (x > 10) throw 'too high';
  if (x < 5) throw 'too low';
} catch (e) {
  message = 'Input is ' + e;
}

console.log(message);

/*
===== Javascript String Methods =====

Popular array methods:
.length - returns the length of a string, return -1 if the text is not found
.indexOf() - returns the index of (the position of) the first occurrence of a specified text in a string
.search() - earches a string for a specified value and returns the position of the match
.slice(start, end) - extracts a part of a string and returns the extracted part in a new string
.substr(start, length) - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
.replace() - replaces a specified value with another value in a string
.toUpperCase() - converting to Upper Case
.toUpperCase() - converting to Lower Case
.concat() - joins two or more strings
.trim() - removes whitespace from both sides of a string

 ===== Converting a String to an Array =====
A string can be converted to an array with the split() method:
var str = "How are you doing today?";
var res = str.split(" "); // ['How','are','you','doing','today?']
*/
