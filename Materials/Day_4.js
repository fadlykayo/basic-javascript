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

// IndexOf
var str = "The scientists measured seasonal changes in gases that fill the air directly above the surface of Gale Crater on Mars, where Curiosity landed. They have published their findings in the journal JGR-Planets.";
var res = str.length;

console.log(str.indexOf('Venus'))

var arr = [1,2,3,4,5];
var res2 = arr.length;

console.log(arr[0], res2);

/*
 ===== Converting a String to an Array =====
A string can be converted to an array with the split() method:
var str = "How are you doing today?";
var res = str.split(" "); // ['How','are','you','doing','today?']

Resources:
https://www.w3schools.com/jsref/jsref_obj_string.asp
*/
