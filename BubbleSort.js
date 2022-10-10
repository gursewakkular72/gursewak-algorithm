// BUBBLE SORT

// the following solution is less efficient because in the arr: // [5,1,2,3] it does the following

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr, arr[j], arr[j + 1]);
    }
    console.log("=======================");
  }
  return arr;
};

// console.log(bubbleSort([5, 1, 2, 3]));

//[1, 5, 2, 3] 1 5
//[1, 2, 5, 3] 2 5
//[1, 2, 3, 5] 3 5
//  =======================
//[1, 2, 3, 5] 1 2
//[1, 2, 3, 5] 2 3
//[1, 2, 3, 5] 3 5
//  =======================
//[1, 2, 3, 5] 1 2
//[1, 2, 3, 5] 2 3
//[1, 2, 3, 5] 3 5
//  =======================
//[1, 2, 3, 5] 1 2
//[1, 2, 3, 5] 2 3
//[1, 2, 3, 5] 3 5
//  =======================
// [1, 2, 3, 5]

// see how its comparing the elements that has already been sorted. They way buble sort works is that the largest value gets to the back with first iteration and then the larger values gets to the back as well.
// So there is no point in comparing them again with each iteration.
//Eleminate these unnecessary comparions we have an efficient solution.
//** for nearly sorted data we can optimize the following efficient solution  */

const efficientBubbleSort = (arr) => {
  //running the outer loop backwards.
  // for optimizing the solution for nealry sorted array we would add a variable "swapped"
  let swapped;
  for (let i = arr.length; i > 0; i--) {
    //running the inner loop based on the outer i, which decreases with each iterations. Consquently decreases the iteration of the inner loop.
    swapped = false;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swapped = true;
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr, arr[j], arr[j + 1]);
    }
    // if no value was found out of place ,break the loop as its sorted already
    if (!swapped) break;
    console.log("=======================");
  }
  return arr;
};

console.log(efficientBubbleSort([5, 1, 2, 3]));
console.log("++++++++++");
console.log(efficientBubbleSort([8, 1, 2, 3, 4, 5]));

// NOtice in the above solution does not do the unnecessary iterations and comparison
// [1, 5, 2, 3] 1 5
// [1, 2, 5, 3] 2 5
// [1, 2, 3, 5] 3 5
//=======================
// [1, 2, 3, 5] 1 2
// [1, 2, 3, 5] 2 3
//=======================
// [1, 2, 3, 5] 1 2
// =======================
// [1, 2, 3, 5]
