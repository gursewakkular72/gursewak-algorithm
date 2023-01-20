class Heap {
  constructor() {
    this.values = [];
  }

  insert(val) {
    if (!this.values) {
      this.values.push(val);
      return this;
    } else {
      this.values.push(val);
      let inputValueIndex = this.values.length - 1;
      let parentIndex = Math.floor((inputValueIndex - 1) / 2);

      while (this.values[inputValueIndex] > this.values[parentIndex]) {
        console.log(inputValueIndex, parentIndex);
        let temp = this.values[parentIndex];
        this.values[parentIndex] = this.values[inputValueIndex];
        this.values[inputValueIndex] = temp;
        inputValueIndex = parentIndex;
        parentIndex = Math.floor((inputValueIndex - 1) / 2);
      }
    }
    return this;
  }

  extractMax() {
    if (!this.values.length === 0) return undefined;
    if (this.values.length === 1) return this.values.pop();
    this.swap(this.values, this.values.length - 1, 0);
    const root = this.values.pop();
    let currentIndex = 0;
    // debugger;
    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      if (
        this.values[leftIndex] > this.values[currentIndex] &&
        this.values[rightIndex] > this.values[currentIndex]
      ) {
        const swapIndex =
          this.values[leftIndex] > this.values[rightIndex]
            ? leftIndex
            : rightIndex;

        this.swap(this.values, swapIndex, currentIndex);
        currentIndex = swapIndex;
      } else if (
        this.values[leftIndex] > this.values[currentIndex] &&
        leftIndex < this.values.length
      ) {
        this.swap(this.values, leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (
        this.values[rightIndex] > this.values[currentIndex] &&
        rightIndex < this.values.length
      ) {
        this.swap(this.values, rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else {
        break;
      }
    }

    return root;
  }

  swap(arr, otherIndex, currentIndex) {
    const temp = arr[otherIndex];
    arr[otherIndex] = arr[currentIndex];
    arr[currentIndex] = temp;
  }
}

const MaxBinaryHeap = new Heap();
MaxBinaryHeap.insert(41);
MaxBinaryHeap.insert(18);
MaxBinaryHeap.insert(33);
MaxBinaryHeap.insert(39);
// MaxBinaryHeap.insert(12);
// MaxBinaryHeap.insert(27);
// MaxBinaryHeap.values = [41, 39, 33, 18, 27, 12];
console.log(MaxBinaryHeap.values);
// MaxBinaryHeap.insert(55);
// console.log(MaxBinaryHeap.values); // expected output: // [55,39,41,18,27,12,33]

MaxBinaryHeap.extractMax(); // expected Output : //[39,27,33,18,12]
// MaxBinaryHeap.dequeue();
console.log(MaxBinaryHeap.values);
