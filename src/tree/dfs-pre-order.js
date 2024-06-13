// Depth First Search - Pre order

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class Dfs {
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
      return this;
    }

    return this.insertNode(this.root, node);
  }

  insertNode(node, newNode) {
    if (node.val === newNode.val) {
      throw new Error(`Value ${node.val} already exists`);
    }

    if (newNode.val < node.val) {
      if (node.left === null) {
        node.left = newNode;
        this.length++;
        return this;
      }
      node = node.left;
    } else {
      if (node.right === null) {
        node.right = newNode;
        this.length++;
        return this;
      }
      node = node.right;
    }

    return this.insertNode(node, newNode);
  }

  traverse() {
    if (this.root === null) {
      return [];
    }

    return this.visit(this.root);
  }

  visit(node, result = []) {
    result.push(node); // Place this line right after the second if to implement "depth first post order"

    if (node.left) {
      this.visit(node.left, result);
    }
    if (node.right) {
      this.visit(node.right, result);
    }

    return result;
  }

  maxDepth(node = this.root) {
    return node === null
      ? 0
      : 1 + Math.max(this.maxDepth(node.left), this.maxDepth(node.right));
  }

  minDepth(node = this.root) {
    if (node === null) return 0;

    if (node.left && node.right) {
      return 1 + Math.min(this.minDepth(node.left), this.minDepth(node.right));
    }
    if (node.left) {
      return 1 + this.minDepth(node.left);
    }

    return 1 + this.minDepth(node.right);
  }
}

/*
  
                 10
               /    \
              8      15
             / \       \
            4   9      20
           / \         / \
          2   5       16  22
                           \
                           190
  
  */
