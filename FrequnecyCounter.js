// The following problems are solved using the frequency counter pattern: creating objects and comparing them instead of using nested for loops.
// All of them have a O(n) unless specified.
// Write a function called same, which accepts two arrays. The function should
//  return true if every value in the array has it's
//  corresponding value squared in the second array. The frequency of values must be the same.
"use strict";

const same = (arr1, arr2) => {
  let match = false;
  if (arr1.length !== arr2.length) return match;
  const arr1Obj = {};
  const arr2Obj = {};
  for (let value of arr1) {
    arr1Obj[value] = (arr1Obj[value] || 0) + 1;
  }
  for (let value of arr2) {
    arr2Obj[value] = (arr2Obj[value] || 0) + 1;
  }
  console.log(arr1Obj);
  console.log(arr2Obj);
  for (let key in arr1Obj) {
    if (!(key ** 2 in arr2Obj)) match = false;
    if (arr1Obj[key] === arr2Obj[key ** 2]) match = true;
  }
  return match;
};

// console.log(same([1, 2, 3], [4, 1, 9])); //true
// console.log(same([1, 2, 3], [1, 9])); // false
// console.log(same([1, 2, 1], [4, 4, 1])); // false
// console.log(same([3, 4, 3], [16, 9, 9])); // true;

// **************************************************************************
// Anagram problem

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true

const validAnagram = (str1, str2) => {
  let match = false;
  if (str1.length !== str2.length) return match;
  if (str1 === "" && str2 === "") return true;

  const str1Obj = {};
  const str2Obj = {};

  for (let char of str1) {
    str1Obj[char] = (str1Obj[char] || 0) + 1;
  }

  for (let char of str2) {
    str2Obj[char] = (str2Obj[char] || 0) + 1;
  }

  for (let key in str1Obj) {
    if (str1Obj[key] === str2Obj[key]) {
      match = true;
    } else {
      match = false;
    }
  }

  return match;
};
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("awesome", "awesom")); // false
// console.log(validAnagram("rat", "car")); // false) )// false
// console.log(validAnagram("qwerty", "qeywrt")); // true
// console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("texttwisttime", "timetwisttext")); // true

//*************************************************************************************************************

function sameFrequency(s1, s2) {
  // good luck. Add any arguments you deem necessary.
  const str1 = s1 + "";
  const str2 = s2 + "";
  let match = false;
  if (str1.length !== str2.length) return match;
  const str1Obj = {};
  const str2Obj = {};

  for (let char of str1) {
    str1Obj[char] = (str1Obj[char] || 0) + 1;
  }

  for (let char of str2) {
    str2Obj[char] = (str2Obj[char] || 0) + 1;
  }

  for (let key in str1Obj) {
    if (!(key in str2Obj)) return match;

    if (str1Obj[key] === str2Obj[key]) match = true;
  }

  return match;
}

// console.log(sameFrequency(182, 281)); // true
// console.log(sameFrequency(34, 14)); // false
// console.log(sameFrequency(3589578, 5879385)); // true
// console.log(sameFrequency(22, 222)); // false

//*****************************************************************************************************************

function areThereDuplicates() {
  let match = false;
  let copyArgs = {};
  for (let key in arguments) {
    copyArgs[arguments[key]] = (copyArgs[arguments[key]] || 0) + 1;
    if (copyArgs[arguments[key]] > 1) match = true;
  }

  return match;
}

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates("a", "b", "c", "a")); // true
