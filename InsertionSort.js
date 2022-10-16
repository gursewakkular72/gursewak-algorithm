/// insetion sort.

// insertion sort keeps one (left) half side of an array sorted  then keeps adding elements from the right to left sorted half where they belong.
// let's use the following array to understand the insertion sort.
// let take array, a= [4,3,2,1] => [1,2,3,4]
// we take that first element a[0] as the sorted element, then we move the rest of the element to the left by comparing it to the first element.
//

const InsertionSort = (arr) => {
  // start from the second element and compare it with the first element.
  var currentValue;
  for (var i = 1; i < arr.length; i++) {
    currentValue = arr[i]; // first element at every iteration is assumed as the sorted element

    for (var j = i - 1; j >= 0 && currentValue < arr[j]; j--) {
      // this loop essentially comapare the element at index j to all the preceding elements in each iteration
      // it only executes if the preceding element is larger than the current element, otheriws the elements are in order already.

      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentValue;
  }

  return arr;
};

console.log(InsertionSort([4, 3, 2, 1]));
