// SELECTION Sort

const selectionSort = (arr) => {
  // selection sort says:
  // iterate through the entire array
  for (let i = 0; i < arr.length; i++) {
    //pick a minimum.
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      // compare the the minimum with the other numbers to obtain a new minimum
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) {
      const temp = arr[min];
      arr[min] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
};

console.log(selectionSort([3, 1, 4, 0, 19, 12]));
