// Binary search tree

class Node {
  constructor(val = 0) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Bst {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const node = new Node(val);
    if (this.root === null) {
      this.root = node;
      return this;
    }

    let current = null;
    let next = this.root;

    while (next) {
      current = next;
      if (val > next.val) {
        next = next.right;
      } else if (val < current.val) {
        next = next.left;
      } else {
        throw new Error(`Value ${val} already exists`);
      }
    }

    if (val > current.val) {
      current.right = node;
    } else {
      current.left = node;
    }

    return this;
  }

  find(val) {
    if (this.root === null) {
      return null;
    }

    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }

      if (val > current.val) {
        current = current.right;
      } else {
        current = current.left;
      }
    }

    return null;
  }
}

/*
        10
            \
            15
            /   \  
        14     20
                /
            16
                       

*/
