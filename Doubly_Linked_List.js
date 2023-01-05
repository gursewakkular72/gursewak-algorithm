// Doubly Linked List.

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      const previousNode = removedNode.prev;
      previousNode.next = null;
      removedNode.prev = null;
      this.tail = previousNode;
    }
    this.length--;
    return removedNode;
  }

  // remvoes the first node
  shift() {
    if (!this.head) return undefined;
    const firstNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = firstNode.next;
      this.head.prev = null;
      firstNode.next = null;
    }
    this.length--;
    return firstNode;
  }

  // unshift adds the node at the beginning of the list.

  unshift(val) {
    const node = new Node(val);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.head.prev = node;
      node.next = this.head;
      this.head = node;
    }

    this.length++;
    return this;
  }

  // get method returns the node at the passed index

  get(index) {
    let count;
    if (!this.head) return undefined;
    if (index < 0 || index >= this.length) return undefined;

    if (index < this.length / 2) {
      count = 0;
      let current = this.head;
      while (current) {
        if (index === count) {
          return current;
        }
        count++;
        current = current.next;
      }
    } else {
      count = this.length - 1;
      let current = this.tail;
      while (current) {
        if (count === index) {
          return current;
        }
        count--;
        current = current.prev;
      }
    }
  }

  //set the value of a node to the passed value at the passed index.
  set(index, val) {
    const node = this.get(index);
    if (!node) return false;
    node.value = val;
    return true;
  }

  //Adding a node in a Doubly Linked List by a certain position
  insert(index, val) {
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index < 0 || index > this.length) {
      return false;
    }

    const newNode = new Node(val);
    const prevNode = this.get(--index);
    const nextNode = prevNode.next;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;
    return true;
  }

  //Removing a node in a Doubly Linked List by a certain position
  remove(index) {
    if (!this.head) return undefined;
    if (index >= this.length || index < 0) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const prevNode = this.get(--index);
    const removedNode = prevNode.next;
    const nextNode = removedNode.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }

  reverse() {
    if (!this.head) return this.head;
    let head = this.head;
    this.head = this.tail;
    this.tail = head;
    let current = head;
    let prev = null;
    let next = null;

    for (let i = 0; i < this.length; i++) {
      // store the prev;
      prev = current.prev;
      // store the next
      next = current.next;
      // swap the next with prev
      current.next = prev;
      // swap the prev with next
      current.prev = next;
      // move to the next node.
      current = current.prev;
    }

    return this;
  }
}

const dList = new DoublyLinkedList();

dList.push(100);
dList.push(101);
dList.push(102);
dList.push(103);
dList.push(104);
