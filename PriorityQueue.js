// Priority Queue implementation:

class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  /**
   * Enqueue method accepts a value and priority,
   * makes a new node, and puts it in the right spot based off of its priority.
   * @param {*} val
   * @param {*} priority
   */

  enqueue(val, priority) {
    const node = new Node(val, priority);
    if (this.values.length === 0) {
      this.values.push(node);
      return this;
    }

    this.values.push(node);

    let inputNodeIndex = this.values.length - 1;
    let parentNodeIndex = Math.floor((inputNodeIndex - 1) / 2);

    while (
      inputNodeIndex > 0 &&
      this.values[inputNodeIndex].priority <
        this.values[parentNodeIndex].priority
    ) {
      const temp = this.values[parentNodeIndex];
      this.values[parentNodeIndex] = this.values[inputNodeIndex];
      this.values[inputNodeIndex] = temp;
      inputNodeIndex = parentNodeIndex;
      parentNodeIndex = Math.floor((inputNodeIndex - 1) / 2);
    }

    return this;
  }

  dequeue() {
    if (!this.values.length === 0) return undefined;
    if (!this.values.length === 1) return this.values.pop();
    this.swap(this.values, this.values.length - 1, 0);
    const root = this.values.pop();
    let currentIndex = 0;
    while (true) {
      let leftIndex = 2 * currentIndex + 1;
      let rightIndex = 2 * currentIndex + 2;
      if (
        this.values[leftIndex]?.priority <
          this.values[currentIndex]?.priority &&
        this.values[rightIndex]?.priority < this.values[currentIndex]?.priority
      ) {
        const swapIndex =
          this.values[leftIndex] < this.values[rightIndex]
            ? leftIndex
            : rightIndex;
        this.swap(this.values, swapIndex, currentIndex);
        currentIndex = swapIndex;
      } else if (
        this.values[leftIndex]?.priority < this.values[currentIndex]?.priority
      ) {
        this.swap(this.values, leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (
        this.values[rightIndex]?.priority < this.values[currentIndex]?.priority
      ) {
        this.swap(this.values, rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else {
        break;
      }
    }

    return root;
  }

  swap(arr, inputIndex, currentIndex) {
    const temp = arr[currentIndex];
    arr[currentIndex] = arr[inputIndex];
    arr[inputIndex] = temp;
  }

  //          100 - 1
  //       90 - 2            80 - 3
  //     60 - 4   65 - 5   75 -7      78 - 6
  //
  //

  // [100, 90, 80, 60, 65, 75 78 ]
}

const PQ = new PriorityQueue();
PQ.enqueue("fever", 5);
PQ.enqueue("broken Arm", 2);
PQ.enqueue("headache", 6);
PQ.enqueue("gunshot", 1);
// PQ.enqueue(60, 6);
// PQ.enqueue(80, 3);
// PQ.enqueue(60, 4);
// PQ.enqueue(65, 5);
// PQ.enqueue(75, 7);

console.log(PQ.values);
