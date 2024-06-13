// Breadth First Search

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Bfs {
  constructor() {
    this.root = null;
    this.length = 0;
    this.depth = 0;
  }

  insert(val) {
    const node = new Node(val);

    if (this.root === null) {
      this.root = node;
      this.length++;
      this.depth++;
      return this;
    }

    return this.insertNode(this.root, node);
  }

  insertNode(node, newNode) {
    if (node.val === newNode.val) {
      throw new Error(`Value ${node.val} already exists`);
    }

    if (node.val > newNode.val) {
      if (node.left === null) {
        node.left = newNode;
        return this;
      }
      node = node.left;
    } else {
      if (node.right === null) {
        node.right = newNode;
        return this;
      }
      node = node.right;
    }
    return this.insertNode(node, newNode);
  }

  traverse() {
    if (this.root === null) {
      return null;
    }

    const queue = [this.root];
    const result = [];
    let current = this.root;

    while (queue.length) {
      current = queue[0];
      const { left, right } = current;
      result.push(current);

      if (left) queue.push(left);
      if (right) queue.push(right);

      queue.shift();
    }

    return result;
  }

  search(val) {
    if (this.root === null) return null;

    const queue = [this.root];

    while (queue.length) {
      const current = queue[0];
      queue.shift();

      if (current.val === val) return current;

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return null;
  }
}
