// console.log("quick sort");

const pivot = (arr) => {
  let pivot = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[pivot] < arr[i]) {
      //do nothing
    } else if (arr[pivot] > arr[i]) {
      const temp = arr[i];
      arr[i] = arr[pivot];
      arr[pivot] = temp;
      pivot++;
    }
  }
  console.log(arr);
  return pivot;
};

console.log(pivot([26, 23, 27, 44, 17, 47, 39, 42, 43]));
