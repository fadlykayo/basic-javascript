/*
===== Javascript Function =====

Arrow function

// EXAMPLES

// ES5
var multiplyES5 = function(x, y) {
  return x * y;
};

// ES6
const multiplyES6 = (x, y) => { return x * y };

// ==================================================

//ES5
var phraseSplitterEs5 = function phraseSplitter(phrase) {
  return phrase.split(' ');
};

//ES6
const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]

// ==================================================

//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};

// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}

// ==================================================

Exercise:
1. Write a JavaScript program that accept two integers and display the larger
2. Write a JavaScript conditional statement to sort three numbers.
3. Write a JavaScript conditional statement to find the largest of three numbers.
4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even.
5. Write a JavaScript program which compute, the average marks of the following students. Then, this average is used to determine the corresponding grade.
== List of students Score: ==
David	80
Vinoth	77
Divya	88
Ishitha	95
Thomas	68

== Table of grades: ==
<60	F
<70	D
<80	C
<90	B
<100 A
6. Write a JavaScript program to sum the multiples of 3 under 100.

Solution:
1.
function myFunction(p1, p2) {
  if (p1 > p2) {
    console.log(p1);
    return p1;
  } else {
    console.log(p2);
    return p2;
  }
}

myFunction(50,10);

2.
function myFunction2(x, y, z) {
  if (x<y && x<z) {
    if (y<z) {
      console.log(x + ", " + y + ", " +z);
    } else {
      console.log(x + ", " + z + ", " +y);
    }
  } else if (y<x && y<z) {
    if (x<z) {
        console.log(y + ", " + x + ", " +z);
    } else {
        console.log(y + ", " + z + ", " +x);
    }
  } else if (z<x && z<y) {
    if (x<y) {
      console.log(z + ", " + x + ", " +y);
    } else {
      console.log(z + ", " + y + ", " +x);
    }
  }
}

function myFunction2(arrayData) {
  let hasil;

  hasil = arrayData.sort(function (a,b) {
  	return a-b;
  });

  return hasil;
}

3.
function myFunction2(a, b, c) {
  if (a>b && a>c) {
    return a;
  } else if (b>a && b>c) {
    return b;
  } else {
    return c;
  }
}

4.
function myFunction() {
  for (var i = 1; i < 16; i++) {
    let a = i % 2;

    if (!a) {
      console.log(i + 'genap');
    } else {
      console.log(i + 'ganjil');
    }
  }
}

5.
function hitungGrade(students) {
  let jumlahScore = 0;
  let rataRata = 0;

  for (let i = 0; i < students.length; i++) {
    jumlahScore += students[i];
  }

  rataRata = jumlahScore / students.length;
  console.log(rataRata);

  if (rataRata < 60) {
    return "Grade : F";
  } else if (rataRata < 70) {
    return "Grade : D";
  } else if (rataRata < 80) {
    return "Grade : C";
  } else if (rataRata < 90) {
    return "Grade : B";
  } else if (rataRata < 100) {
    return "Grade : A";
  }
}

console.log(hitungGrade([80,77,88,95,68]));

6.
function hitungJumlah() {
  let result = 0;

  for (let i = 0; i < 100; i++) {
    if (i % 3 === 0) {
      result += i;
    }
  }

  return result;
}

===== Javascript Array & Object

Exercise:

let attendance = [
  {
    name: 'Miss Scarlet',
    present: true,
  },
  {
    name: 'Mrs. White',
    present: false,
  },
  {
    name: 'Reverend Green',
    present: true,
  },
  {
    name: 'Rusty',
    present: false,
  },
  {
    name: 'Colonel Mustard',
    present: true,
  },
  {
    name: 'Professor Plum',
    present: true,
  }
]

1. every each name tambahkan + ' Green';
2. print the result

1. sebuah string yg isinya nama dengan dipisahkan koma. Contoh: 'Fadly Kayo, Alan, Budi, dst';
2. print the result

1. condition = true
2. count the length of the result
3. print the result

===== Javascript Array Iteration =====

.map() - creates a new array by performing a function on each array element
.filter() - creates a new array with array elements that passes a test
.reduce() - runs a function on each array element to produce (reduce it to) a single value

MAP

var users = [
  { name: 'Jack', age: 21 },
  { name: 'Ben', age: 23 },
  { name: 'Adam', age: 22 },
];

var agesDoubled = users.map(user => {
  var age = user.age;
  return age * 2;
});

FILTER

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5
var divisibleByThrreeES5 = array.filter(function (v) {
  return v % 3 === 0;
});

// ES6
const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);

console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]

REDUCE

var users = [
  { name: 'Jack', age: 21 },
  { name: 'Ben', age: 23 },
  { name: 'Adam', age: 22 },
];

var ages = users.map(user => user.age);
var sum = ages.reduce((a, b) => a + b);

console.log(sum);

===== Javascript Array Methods =====

Popular array methods:
.length - to get the length of an array
.join() - joins all array elements into a string
.indexOf() - searches an array for an element value and returns its position
.pop() - removes the last array element
.push() - adds a new element to an array (at the end)
.shift() - removes the first array element
.unshift() - adds a new element to an array (at the beginning)
.concat() - creates a new array by merging (concatenating) existing arrays
.splice() - add/remove element to/from an array in a specific position
.slice() - slices out a piece of an array into a new array

Resources:
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/js/js_array_methods.asp
https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php
*/


let x = 0;

let y = 0;
