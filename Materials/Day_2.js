// Looping using for

var cars = ["Saab", "Volvo", "BMW", "Toyota", "Daihatsu", "Ferrari", "Opel"];

console.log(cars.join(', '));

for (var i = 0; i < cars.length; i++) {
  cars[i] += '123';
}

console.log(cars.join(', '));

// Exercise for loop
var profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 24,
};

var profile2 = {
  firstName: 'Alex',
  lastName: 'Doe',
  age: 128,
};

var profile3 = {
  firstName: 'Robert',
  lastName: 'Doe',
  age: 37,
};

var arrayProfile = [profile, profile2, profile3];

// 1. Halo semua, nama saya xxx, umur saya xxx.
// 2. Total umur kami xxx. Menggunakan for loop.

console.log('Halo semua, nama saya ' +
            arrayProfile[0].firstName + ' ' +
            arrayProfile[0].lastName +
            ', umur saya ' +
            arrayProfile[0].age
           )

var total = arrayProfile[0].age +
            arrayProfile[1].age +
            arrayProfile[2].age;

console.log('Total umur kami ' + total);

var total2 = 0;

for (var i = 0; i <= 2; i++) {
  total2 += arrayProfile[i].age;
}

console.log('Total umur kami ' + total2);

// Exercise Temperature

var city = [
  {
    name: 'Jakarta',
    temperature: 32,
//     category: 'hot',
  },
  {
    name: 'Bandung',
    temperature: 22,
//     category: 'fair',
  },
  {
    name: 'Sydney',
    temperature: 2,
//     category: 'cold',
  }
]

for (var i = 0; i < city.length; i++) {
  if (city[i].temperature > 27) {
    city[i].category = 'hot';
  } else if (15 < city[i].temperature <= 27) {
    city[i].category = 'fair';
  } else {
    city[i].category = 'cold';
  }
}

console.log(city)

// Exercise 1
// Solution 1

let line = 5;
let str = '';

for (let i = 0; i < line; i++) {
  str = str + '*';
  console.log(str);
}

// Solution 2

let i = 0;

while (i < 5) {
  str = str + '*';
  console.log(str);
  i++;
}

// Exercise 2
// Solution 1

let str2 = '*****';
let j = 0;

for (let j = 0; j < line; j++) {
  console.log(str2);
  str2 = str2.substr(1);
}

// Solution 2

while (j < 5) {
  console.log(str2);
  str2 = str2.substr(1);
  j++;
}

// Solution 3

let line = 5;

for(let i = 0; i < 5; i++) {
  let result = '';

  for(let j = 5; j > i; j--) {
    result += '*';
  }

  console.log(result);
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

/*
Resources:
https://www.w3schools.com/js/js_loop_while.asp
https://www.w3schools.com/jsref/jsref_substr.asp
*/
