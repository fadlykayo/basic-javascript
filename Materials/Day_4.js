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
