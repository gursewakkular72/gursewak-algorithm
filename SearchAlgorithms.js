///*********************** */
// This file contains implemntation of various kind of search algorithms
// *****************************************************************************************/

// Write a function called BINARYSEARCH which accepts a sorted array and a value and returns the index at which the value exists. Otherwise, return -1.
// [1, 2, 3, 4, 5, 6, 7, 8];
"use strict";

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.round((left + right) / 2);
  //   debugger;
  while (left < right) {
    if (arr[left] === val) return left;
    if (arr[right] === val) return right;
    if (arr[middle] === val) return middle;
    if (val < arr[middle]) {
      right = middle - 1;
      middle = Math.round((left + right) / 2);
    } else {
      left = middle + 1;
      middle = Math.round((right + left) / 2);
    }
  }
  return -1;
};

// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1

//******************************************************************************************************* */

// NAVIVE Search (not an official name);
// find the number of occurrences of string in another larger string.

const naiveSearch = (bigStr, smallStr) => {
  let count = 0;
  // debugger;

  for (let i = 0; i < bigStr.length; i++) {
    for (let j = 0; j < smallStr.length; j++) {
      if (bigStr[i + j] !== smallStr[j]) break;
      if (j === smallStr.length - 1) count++;
    }
  }
  return count;
};

// console.log(naiveSearch("omgomgomg", "omg")); // 2

// ("wowomgzomgjh");
// ("omg");
