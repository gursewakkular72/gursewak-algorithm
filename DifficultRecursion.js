function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return "";

  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

// reverse('awesome') // 'emosewa'))
// console.log(reverse("awesome"));
// e + reverse("awesom");
// m + reverse("aweso");
// o + reverse("awes");
// s + reverse("awe");
// e + reverse("aw");
// w + reverse("a");
// a + "reverse('');";
// **!!!! Important: 'a'.substring(0,0) give '';

// *********************************************************************
// Write a recursive function called isPalindrome which returns true if the
//  string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(str) {
  // add whatever parameters you deem necessary - good luck!

  const reverse = (str) => {
    if (str.length === 0) return "";
    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  };

  const reversedStr = reverse(str);

  return reversedStr === str;
}

///******************************************** */

// Write a recursive function called someRecursive which
//  accepts an array and a callback. The function returns true if
// a single value in the array returns true when passed to the callback. Otherwise it returns false.

// SAMPLE INPUT / OUTPUT
// const isOdd = val => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

const isOdd = (val) => {
  if (val % 2 === 0) return false;
  return true;
};

const someRecursive = (arr, func) => {
  if (arr.length === 0) return false;

  return func(arr[0]) ? true : false || someRecursive(arr.slice(1), func);
};

// console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
// console.log(someRecursive([4, 9], isOdd)); // true
// console.log(someRecursive([4, 6, 8], isOdd)); // false
// console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false

//**************************************************************************** */

function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

[1, 2, 3, 4, 5] == [1, 3, 5];

collectOddValues([1, 2, 3, 4, 5]);

newArr = [];

newArr = [1];

newArr = [1, 3, 5]; /// recursion starts here

// ****************************************************************************

// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

function flatten(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
// console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]?""
// console.log(flatten([[1], [2], [3]])); // [1,2,3]
// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3

// **********************************************************************************8

// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

function capitalizeFirst(arr) {
  // add whatever parameters you deem necessary - good luck!
  let newArr = [];

  if (arr.length === 0) return [];
  else {
    let str = arr[0][0].toUpperCase() + arr[0].substring(1);
    newArr.push(str);
  }

  newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
  return newArr;
}

// console.log(capitalizeFirst(["car", "taco", "banana"])); // ['Car','Taco','Banana']

// const aR = ["Banana", "Apple"];
// console.log(aR[1][0]);

// ********************************************************************************************8

// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  // add whatever parameters you deem necessary - good luck!

  let newArr = [];
  if (arr.length === 0) return [];
  else {
    let str = arr[0].toUpperCase();
    newArr.push(str);
  }

  return newArr.concat(capitalizeWords(arr.slice(1)));
}

// let words = ["i", "am", "learning", "recursion"];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']

// ***********************************************************************************************************8

// Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

const evenNum = (num) => (num % 2 === 0 ? true : false);

function nestedEvenSum(obj) {
  // add whatever parameters you deem necessary - good luck!
  let sum = 0;

  for (const i in obj) {
    if (typeof obj[i] === "object") {
      sum += nestedEvenSum(obj[i]);
    } else if (typeof obj[i] === "number") {
      if (obj[i] % 2 === 0) sum += obj[i];
    }
  }
  return sum;
}

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup",
    },
  },
};

var obj2 = {
  a: 2,
  b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
  c: { c: { c: 2 }, cc: "ball", ccc: 5 },
  d: 1,
  e: { e: { e: 2 }, ee: "car" },
};

// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10

// // *****************************************************************************************************************
// Write a function called stringifyNumbers which takes in an object and
// finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

const stringifyNumbers = (obj) => {
  let newObj = {};
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      // this line creates a new object such as data = {} and then recursion adds key pair values to it such as val: '4'
      newObj[i] = stringifyNumbers(obj[i]);
    } else if (typeof obj[i] === "number") {
      newObj[i] = obj[i] + "";
    } else {
      newObj[i] = obj[i];
    }
  }
  return newObj;
};

let obj = {
  num: 1,
  test: [],
  data: {
    val: 4,
    info: {
      isRight: true,
      random: 66,
    },
  },
};

console.log(stringifyNumbers(obj));

// console.log(obj);

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

// **************************************************************************************************************************

// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj_ = {
  stuff: "foo",
  data: {
    val: {
      thing: {
        info: "bar",
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: "baz",
          },
        },
      },
    },
  },
};

const collectStrings = (obj) => {
  let newArr = [];

  for (let i in obj) {
    if (typeof obj[i] === "object") {
      newArr = newArr.concat(collectStrings(obj[i]));
    } else {
      if (typeof obj[i] === "string") newArr.push(obj[i]);
    }
  }

  return newArr;
};

// collectStrings(obj) // ["foo", "bar", "baz"])
