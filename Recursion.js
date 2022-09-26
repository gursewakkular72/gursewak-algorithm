/// THe following files contains the problems solved using recursion.

//****************************************************** */
//** the countDown problem */
const countDown = (num) => {
  debugger;
  if (num === 0) return;
  console.log(num);
  num--;
  countDown(num);
};

// countDown(4);

// **************************************************************
// ** the sumRange Problem
const sumRange = (num) => {
  if (num === 1) return 1;
  num--;
  return num + sumRange(num);
};

//**************************************************************************************/

// function collectOddValues(arr) {
//     //   debugger;                                  //// INVESTIGATE THIS LATER
//     const oddArr = [];
//     if (arr.length === 0) return [];
//     if (arr[0] % 2 !== 0) {
//         return oddArr.concat(collectOddValues(arr.slice(1)));

//     }
//   }

function collectOddValues(arr) {
  //   debugger;
  const oddArr = [];
  if (arr.length === 0) return [];
  if (arr[0] % 2 !== 0) {
    oddArr.push(arr[0]);
  }
  return oddArr.concat(collectOddValues(arr.slice(1)));
}

// console.log(collectOddValues([1, 2, 3, 4]));

//******************************************************************************************* */

// Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.

const power = (base, exponent) => {
  if (exponent === 0) return 1;

  return base * power(base, exponent - 1);
};

// console.log(power(7, 3)); //343

// *************************************************************************************************

// Write a function factorial which accepts a number and returns the factorial of that number. A factorial is the product of an integer and all the integers below it;
// e.g., factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 1 equals 24.  factorial zero (0!) is always 1.

const factorial = (num) => {
  if (num === 0) return 1;

  return num * factorial(num - 1);
};

// ******************************************************************************************************/

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

function productOfArray(arr) {
  if (arr.length === 0) return 1;
  return arr[0] * productOfArray(arr.slice(1));
}

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

// **************************************************************************************************************/

// Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function

const recursiveRange = function (num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
};

// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

// *****************************************************************************///

// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1,
// and where every number thereafter is equal to the sum of the previous two numbers.

const fib = (num) => {
  if (num === 0) return 0;
  if (num === 1) return 1;
  return fib(num - 1) + fib(num - 2);
};

console.log(fib(4));
