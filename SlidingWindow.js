//The following problems are solved using the sliding window pattern.

// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.

"use strict";

function maxSubarraySum(arr, number) {
  if (number > arr.length) return null;
  let max = 0;
  let tempMax = 0;

  for (let i = 0; i < number; i++) {
    max += arr[i];
  }
  tempMax = max;

  for (let i = 1; i <= arr.length - number; i++) {
    tempMax = tempMax - arr[i - 1] + arr[i + number - 1];
    max = Math.max(max, tempMax);
  }

  return max;
}

// console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
// console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
// console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
// console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
// console.log(maxSubarraySum([2, 3], 3)); // null

// 100 + 200 = 300
// 200 + 300 = 500  -- 300 - 100 + 300 = 500 i = 1
// 300+ 400 = 700   --- 500 - 200 +  400 = 700

// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

const minSubArrayLen = (nums, sum) => {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    debugger;
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
};

// console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log(minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log(minSubArrayLen([2, 61, 7], 6)); // 1 -> because [5,4] is the smallest subarray

// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)); // 1 -> because [62] is greater than 52
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0

// let lPointer = 0;
//   let rPointer = 1;
//   let minLen = Infinity;
//   let tempLen = 0;
//   let tempSum = 0;

// tempSum = arr[lPointer] + arr[rPointer];
// while (lPointer < rPointer) {
//   // debugger;
//   if (tempSum === number) {
//     if (arr.length % 2 == 0) tempLen = rPointer - lPointer + 1;
//     else tempLen = rPointer - lPointer;
//     if (tempLen < minLen) {
//       minLen = tempLen;
//     }
//     if (rPointer !== arr.length - 1) {
//       rPointer++;
//       tempSum = tempSum + arr[rPointer];
//     } else {
//       lPointer++;
//     }
//   }
//   if (tempSum > number) {
//     lPointer++;
//     tempSum = tempSum - arr[lPointer - 1];
//   }

//   if (tempSum < number) {
//     if (rPointer !== arr.length - 1) {
//       rPointer++;
//       tempSum = tempSum + arr[rPointer];
//     }

//     if (rPointer === arr.length - 1) {
//       lPointer++;
//     }
//   }
// }

// return minLen;

//**************************************************************************************8 */

// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

const findLongestSubstring = (str) => {
  // debugger;
  if (str.length === 0) return 0;
  let right = 0;
  let len = -Infinity;
  let tempStr = "";
  let tempStrIndex = 0;

  while (right < str.length) {
    /// if not found
    if (tempStr.indexOf(str[right]) === -1) {
      tempStr += str[right];
      right++;
    }
    //if found
    else {
      //get the length of the temp str.
      if (tempStr.length > len) {
        len = tempStr.length;
      }

      // get the index of the char that has repeated itself
      tempStrIndex = tempStr.indexOf(str[right]);
      // trim the tempStr a char after the repeated character.
      tempStr = tempStr.substring(tempStrIndex + 1);
      // alter the tempStr, to remove the substring until the repeated charcter.
      tempStr += str[right];
      right++;
    }
  }

  return tempStr.length > len ? tempStr.length : len;
};

console.log(findLongestSubstring("")); // 0
console.log(findLongestSubstring("rithmschool")); // 7
console.log(findLongestSubstring("thisisawesome")); // 6
console.log(findLongestSubstring("thecatinthehat")); // 7
console.log(findLongestSubstring("bbbbbb")); // 1
console.log(findLongestSubstring("longestsubstring")); // 8
console.log(findLongestSubstring("thisishowwedoit")); // 6

//if no similar character were found.
//  if (tempStr.indexOf(str[right]) === -1) {
//   tempStr += str[right];
//   len = Math.max(len, tempStr.length);
//   right++;
// } else {
//   len = Math.max(len, tempStr.length);
//   tempStr = str[right];
//   left = right;
//   right = left + 1;
// }
