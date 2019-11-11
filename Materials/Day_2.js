// Exercise 1

let line = 5;
let str = '*';

for (let i = 0; i < line; i++) {
  console.log(str);
  str = str + '*';
}

while (i < 5) {
  console.log(str);
  str = str + '*';
  j++;
}

// Exercise 2

let str2 = '*****';

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
  if (i > 3) {
    str = str.substr(1);
  } else {
    str = str + '*';
  }
}

/*
Resources:
https://www.w3schools.com/js/js_loop_while.asp
https://www.w3schools.com/jsref/jsref_substr.asp

*/
