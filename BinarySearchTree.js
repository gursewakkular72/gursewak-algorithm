class Node {
  constructor(val) {
    this.value = val;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val < current.value) {
        if (current.left === null) {
          current.left = node;
          return this;
        } else {
          current = current.left;
        }
      }

      if (val > current.value) {
        if (current.right === null) {
          current.right = node;
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  find(val) {
    if (!this.root) return false;
    let current = this.root;
    while (true) {
      if (val === current.value) return true;
      if (val < current.value) {
        if (current.left === null) return false;
        else {
          current = current.left;
        }
      } else if (val > current.value) {
        if (current.right === null) return false;
        else {
          current = current.right;
        }
      }
    }
  }
  //---------------
  // Bredth first Search  (BFS)
  // in breadth first Search we visit the nodes in first horizontal level first and then we move to subsequent levels one by one.
  // eg.
  //                  --->  10
  //          --->   6            15
  //      --->   3      8             20
  // the order nodes would be visited is as follows:
  //  10
  // 6, 15
  // 3,8,20
  BFS() {
    let node = this.root;
    const queue = []; // this basically keeps track of a parent node at each level
    const visited = []; // keeps track of the visited nodes
    queue.push(node);

    while (queue.length) {
      node = queue.shift(); // get the first node from the queue
      visited.push(node.value); // mark it visited by pushing it to the visited array.
      // check that if the node pushed to the visited array has any children on left
      if (node.left) {
        queue.push(node.left);
      }
      // check that if the node pushed to the visited array has any children on rigth
      if (node.right) {
        queue.push(node.right);
      }
    }
    return visited;
  }

  // 'visit' in the following function definition means 'store'

  // DFS pre-order: in this we visit every branch to the end before moving to other branches.

  DFS_PreOrder() {
    let current = this.root;
    const visited = [];
    const helperDFS_PreOrder = (node, arr) => {
      arr.push(node.value);
      if (node.left) {
        helperDFS_PreOrder(node.left, arr);
      }
      if (node.right) {
        helperDFS_PreOrder(node.right, arr);
      }
    };
    helperDFS_PreOrder(current, visited);
    return visited;
  }

  // DFS Post order: In this we visit and store all child the nodes of branch before storing its parent node;
  DFS_PostOrder() {
    let current = this.root;
    const visited = [];

    const helperDFS_PostOrder = (node, arr) => {
      if (node.left) {
        helperDFS_PostOrder(node.left, arr);
      }
      if (node.right) {
        helperDFS_PostOrder(node.right, arr);
      }
      arr.push(node.value);
    };
    helperDFS_PostOrder(current, visited);
    return visited;
  }

  // DFS In order: we visit all the nodes a parent node on left side then visit the parent node and then we move to the right side.
  DFS_InOrder() {
    let current = this.root;
    const visited = [];

    const helperDFS_PostOrder = (node, arr) => {
      if (node.left) {
        helperDFS_PostOrder(node.left, arr);
      }
      arr.push(node.value);
      if (node.right) {
        helperDFS_PostOrder(node.right, arr);
      }
    };
    helperDFS_PostOrder(current, visited);
    return visited;
  }
}

// BST.root.right = new Node(7);
// BST.root.left = new Node(8);
// BST.root.right.left = new Node(6);
// BST.root.right.right = new Node(9);

const BST = new BinarySearchTree();

BST.root = new Node(10);
BST.insert(9).insert(7).insert(15).insert(12).insert(16).insert(8).insert(5);

const BST2 = new BinarySearchTree();
BST2.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20);

// BST2.BFS(); // will print  [10, 6, 15, 3, 8, 20]
//BST2.DFS_PreOrder(); will print [10, 6, 3, 8, 15, 20]
//BFS2.DFS_PostOrder // will print [3, 8, 6, 20, 15, 10]
//BFS2>DFS_InOrder // will print [3, 6, 8, 10, 15, 20]
