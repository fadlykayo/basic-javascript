function sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }

  return array;
}

// Exercise

let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.`


/*
1. Ganti semua kata "Lorem" menjadi "Merol"
2. Cari kata "odio", ada di index ke berapa
3. Ambil setiap kata dari string di atas, tanpa memerlukan " " dan
hilangkan semua tanda baca seperti , (koma) dan . (titik)

Expectation:
["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", ...]

4. Tampilkan array string di atas menjadi sebuah string seperti ini:

Expectation:
1. Lorem, 2. ipsum, 3. dolor, 4. sit, 5. amet, 6. consectetur, ...
*/

// let result0 = [];

// for (let i = 0; i < str.length; i++) {
//   if (str.indexOf('Lorem') !== -1) {

//   }
// }

let result = str.replace("Lorem", "Merol");

// console.log(result);

let result2 = str.indexOf("odio");

console.log(result2);

let result3 = str.replace(/,/g, "").replace(/\./g, "").toLowerCase().split(" ");

// console.log(result3);

let result4 = result3.slice();

for (let i = 0; i < result4.length; i++) {
  result4[i] = i+1 + '. ' + result4[i] + 'Green';
}

console.log(result3);
// console.log(result4);

/*
===== Javascript String Methods =====

Popular string methods:
.length - returns the length of a string, return -1 if the text is not found
.indexOf() - returns the index of (the position of) the first occurrence of a specified text in a string
.search() - earches a string for a specified value and returns the position of the match
.slice(start, end) - extracts a part of a string and returns the extracted part in a new string
.substr(start, length) - substr() is similar to slice(). The difference is that the second parameter specifies the length of the extracted part.
.replace() - replaces a specified value with another value in a string
.toUpperCase() - converting to Upper Case
.toLowerCase() - converting to Lower Case
.concat() - joins two or more strings
.trim() - removes whitespace from both sides of a string

*/

// ===== Sorting =====

let arr = [4,7,9,3,5,7,9,2,6,3,5,2,4];

let result = arr.sort(function(a,b) {
  return b-a;
});

console.log(result);
console.log(result[arr.length], result[arr.length - 1], result[arr.length - 2]);
