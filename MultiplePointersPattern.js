// The following problems are solved using multiple pointers approach.

// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair where the sum is 0. Return an array
// that includes both values that sum to zero or undefined if a pair does not exist

const sumZero = (arr) => {
  if (arr.length === 1) return undefined;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] === 0) {
      return [arr[left], arr[right]];
    } else if (arr[left] + arr[right] > 0) {
      right--;
    } else {
      left++;
    }
  }
};

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [3,-3]
// console.log(sumZero([-2, 0, 1, 3])); // undefined
// console.log(sumZero([1, 2, 3])); // undefined

// ***************************************************************************************************

// Implement a function called countUniqueValues, which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in the array,
// but it will always be sorted.

const countUniqueValues = (arr) => {
  const len = arr.length;
  if (len === 0) return 0;
  let firstPointer = 0;
  let secondPointer = 1;
  const result = [];

  while (secondPointer !== len) {
    if (arr[firstPointer] !== arr[secondPointer]) {
      result.push(arr[firstPointer]);
    }
    firstPointer++;
    secondPointer++;
    if (secondPointer === len) {
      if (arr[firstPointer] !== arr[firstPointer - 1]) {
        result.push(arr[firstPointer]);
      }
    }
  }

  return result.length;
};

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
// console.log(countUniqueValues([1, 6, 6, 6, 6, 7])); // 3

// ***************************************************************************************************
// Write a function called maxSubarraySum which accepts an array of integers
// and a number called n. The function should calculate the maximum sum of n
// consecutive elements in the array.

const maxSubarraySum = (arr, num) => {
  const len = arr.length;
  let max = 0;
  if (len === 0) return null;
  for (let i = 0; i < num; i++) {
    max += arr[i];
  }
  console.log("max", max);
  for (let i = 1; i <= len - num; i++) {
    let tempMax = max - arr[i - 1] + arr[i + (num - 1)];
    max = Math.max(max, tempMax);
    console.log(max);
  }
  return max;
};

////

// function maxSubarraySum(arr, num) {
//   let maxSum = 0;
//   let tempSum = 0;
//   if (arr.length < num) return null;
//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }
//   tempSum = maxSum;
//   for (let i = num; i < arr.length; i++) {
//     tempSum = tempSum - arr[i - num] + arr[i];
//     maxSum = Math.max(maxSum, tempSum);
//   }
//   return maxSum;
// }

// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
// console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
// console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
// console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); // 13
// console.log(maxSubarraySum([], 4)); // null

function search(array, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

// search([1,2,3,4,5,6],4) // 3
// search([1,2,3,4,5,6],6) // 5
// search([1,2,3,4,5,6],11) // -1

//*********************************************************************************************

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values
// in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

const averagePair = (arr, avg) => {
  const arrLen = arr.length;
  if (arrLen === 0) return false;
  let right = arrLen - 1;
  let left = 0;
  while (right > left) {
    let calculatedAvg = arr[left] + arr[right] / 2;
    if (calculatedAvg === avg) {
      return true;
    }
    if (calculatedAvg > avg) {
      right--;
    }
    if (calculatedAvg < avg) {
      left++;
    }
  }

  return false;
};

// console.log(averagePair([1, 2, 3], 2.5)); // true
// console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
// console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
// console.log(averagePair([], 4)); // false

// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words,
// the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(str1, str2) {
  let pointerStr1 = 0;
  let pointerStr2 = 0;
  while (pointerStr1 < str1.length && pointerStr2 < str2.length) {
    if (str1[pointerStr1] === str2[pointerStr2]) {
      pointerStr1++;
    } else {
      pointerStr2++;
    }
  }

  return pointerStr1 === str1.length;
}

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); //false
