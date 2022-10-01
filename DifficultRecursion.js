function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return "";

  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

// reverse('awesome') // 'emosewa'))
console.log(reverse("awesome"));
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
  if (arr.length === 0) return;
  // if (func(arr[0])) return true;
  someRecursive(arr.slice(1), func);
  return func(arr[0]);
};

console.log(someRecursive([1, 2, 3, 4], isOdd)); // true
console.log(someRecursive([4, 9], isOdd)); // true
console.log(someRecursive([4, 6, 8], isOdd)); // false
console.log(someRecursive([4, 6, 8], (val) => val > 10)); // false
