// Queue are based on the 'FIFO' (First in First out) principle

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const node = new Node(val);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    const removedNode = this.first;
    this.first = this.first.next;
    removedNode.next = null;
    this.size--;
    return removedNode.value;
  }
}

const queue = new Queue();
