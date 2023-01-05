// create a node.
// node has a value and a next pointer.

class Node {
  constructor(val) {
    (this.value = val), (this.next = null);
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // --------------------------------------------------------------------------------------
  /**
   *  pushes a node at the end of the list
   * @params {any} val - The value that needs to be pushed
   * @return {Singly Linked List } this - the singly linked list being manipulated
   */

  push(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }

  // -----------------------------------------------------------------------------------

  /**
   * prints the values stored at each node
   * @params {void}
   * @returns {void}
   */

  traverse() {
    if (!this.head) return undefined;
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
// --------------------------------------------------------------------------------------

  /**
   * pop it removes the last node from the list.
   * @params {void}
   * returns : the removed node
   */

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let previous = current;

    // go to the last node;
    // set the next of the second last node to null;
    while (current.next) {
      previous = current;
      current = current.next;
    }

    this.tail = previous;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // --------------------------------------------------------------------------------------

  /**
   *shift removes the first node of the list. 
   @params {void}
   @returns {undefined} - if the singly list empty, the function return undefined 
   @returns { node} - the removed node 
   */
  shift() {
    // store the first head in the variable
    // point the head to the next element.
    if (!this.head) return undefined;
    let removedNode = this.head;
    this.head = removedNode.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return removedNode;
  }

// --------------------------------------------------------------------------------------

  /**
   * unshift adds a new node at the beginning of the list
   * @params {any} val - the value that needs to be added
   * @this - refers to the singly linked list being manipulated
   * @returns {undefined} - if the singly list empty, the function return undefined
   * @returns {singly Linked List} this - the singly linked List being manipulated
   */
  unshift(val) {
    const newNode = new Node(val);
    // if the list is empty.
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }
    // point the next of the new Node to the first node in the list.
    // point the head to the new Node.
    else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
// --------------------------------------------------------------------------------------

  /**
   * get function gets the node stored at the specified index.
   * @params {number} index- the index we want to get to.
   * @returns {undefined} - if the singly linked list is empty retunrs undefined or the index is greater than or equal to the length of the list or less than zero.
   * @returns {any} - if the singly linked list is not empty returns the  node at the specified index
   */
  get(index) {
    if (index >= this.length || index < 0) return undefined;
    let count = 0;
    let current = this.head;
    while (current) {
      if (count === index) {
        return current;
      }

      count++;
      current = current.next;
    }
  }

 // --------------------------------------------------------------------------------------

  /**
   * set funtions the replace the value of the node found at the specified index.
   * @params {any} val - values needs to be inserted.
   * @params {number} index - the index of the node where the passed value will be added.
   * @returns {boolean} - returns true if the vzlue was added otherwise returns false;
   */

  set(index, value) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    } else {
      return false;
    }
  }


  // --------------------------------------------------------------------------------------

  /**
  * this function insert a node at the specified index with specified value. 
   
  */

  insert(index, value) {
    const newNode = new Node(value);
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }

    if (index === 0) {
      this.unshift(value);
      return true;
    }

    // for all other cases insert the node where the index tells us you to do so.

    // get the node before the index (we need to insert the node at the index so we are going to get the node before the passed index)
    const foundNode = this.get(--index);
    const nextNode = foundNode.next;
    foundNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

 /**
   * removes the node from the specified index and returns the removed node.
   */
  
  remove(index) {
    if (index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index < 0) return undefined;
    if (index === 0) return this.shift();

    // in order to remove the node at the specified index. We would get the preceeding node and then point the that node to the node after the specified index
    const foundNode = this.get(--index);
    const nextNode = foundNode.next; // the node at the specific index
    foundNode.next = nextNode.next; // point to the node after the specific index;
    this.length--;
    return nextNode;
  }

  reverse() {
    // revers the the head and tail
    let currentNode = this.head; // current node;
    this.head = this.tail;
    this.tail = currentNode;
    let next;
    let prev = null;
    while (currentNode) {
      // set the next node
      next = currentNode.next;
      currentNode.next = prev;
      prev = currentNode;
      currentNode = next;
    }

    return this;
  }

  // 1 ->11 ->2 ->3 ->4 ->5
}

}
/// 1
/// 2 cur->2
//  3 cur ->3
//
const sList = new SinglyLinkedList();

sList.push(1);
sList.push(2);
sList.push(3);
