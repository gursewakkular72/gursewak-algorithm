/// THe file has merge sort algorithm

const mergeArrays = (arr1, arr2) => {
  debugger;
  const newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
};

/// the following code splits an array into two halfs and keeps spliting until it each element is stored inside an individual array
// it merges those halfs into one array.
const mergeSort = (arr) => {
  debugger;
  if (arr.length <= 1) return arr;
  // split the arry into two halfs.
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArrays(left, right);
};

// console.log(mergeArrays([1, 5, 7], [2, 3, 8, 9]));
// console.log(mergeArrays([0, 1], []));

let arr = [10, 2, 23, 13];
console.log(mergeSort(arr));
// console.log(arr);
