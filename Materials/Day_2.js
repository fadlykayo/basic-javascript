// Exercise 1

let line = 5;
let str = '';

for (let i = 0; i < line; i++) {
  str = str + '*';
  console.log(str);
}

let i = 0;

while (i < 5) {
  str = str + '*';
  console.log(str);
  i++;
}

// Exercise 2

let str2 = '*****';
let j = 0;

for (let j = 0; j < line; j++) {
  console.log(str2);
  str2 = str2.substr(1);
}

while (j < 5) {
  console.log(str2);
  str2 = str2.substr(1);
  j++;
}

// Exercise 3

let line = 9;
let str = '*';

for (let i = 0; i < line; i++) {
  console.log(str);
  if (i < 4) {
    str = str + '*';
  } else {
    str = str.substr(1);
  }
}

let line = 5;

for(let i = line; i > 0; i--) {
  let result = '';

  for(let j = i; j > 0; j--) {
    result += '*';
  }

  console.log(result);
}

/*
Resources:
https://www.w3schools.com/js/js_loop_while.asp
https://www.w3schools.com/jsref/jsref_substr.asp
https://www.w3schools.com/js/js_functions.asp
*/
