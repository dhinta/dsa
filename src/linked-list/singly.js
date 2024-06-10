// Singly Linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  #reset() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }


  push(val) {
    const node = new Node(val);
    if (this.length === 0) {
      this.head = node;
      this.tail = node;
    } else {
      const { tail } = this;
      tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  pop() {
    if (this.length <= 1) {
      this.#reset();
      return;
    }

    let newTail = null;
    let node = this.head;
    while (node.next) {
      newTail = node;
      node = node.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
  }

  // remove the first element
  shift() {
    if (this.length <= 1) {
      this.#reset();
      return;
    }

    this.head = this.head.next;
    this.length--;
  }

  // add a new element in the beginning
  unshift(val) {
    const { head } = this;
    const node = new Node(val);
    this.head = node;

    if (head) {
      this.head.next = head;
    } else {
      this.tail = node;
    }
    this.length++;
  }

  // Get by position
  get(index) {
    if (index >= this.length || index < 0) return null;

    let i = 0;
    let node = this.head;

    while (i <= index) {
      if (i === index) {
        return node;
      }
      node = node.next;
      i++;
    }

    return null;
  }

  // Update value by position
  set(index, val) {
    if (index >= this.length || index < 0) return null;

    let i = 0;
    let node = this.head;

    while (i <= index) {
      if (i === index) {
        node.val = val;
        return node;
      }
      node = node.next;
      i++;
    }

    return null;
  }

  // Insert at position
  insert(index, val) {
    if (index > this.length || index < 0) return null;
    if(index === 0) return this.unshift(val);
    if(index === this.length) return this.push(val);

    const prev = this.get(index - 1);
    const node = new Node(val);
    const next = prev.next;

    prev.next = node;
    node.next = next;
    this.length++;
    return node;
  }

  // Remove by position
  remove(index = 0) {
    if (index >= this.length || index < 0) return null;
    if(index === 0) return this.shift();
    if(index === this.length - 1) return this.pop();

    const prevNode = this.get(index - 1);
    const nextNode = this.get(index + 1);

    prevNode.next = nextNode;
    if(nextNode === null ) {
        this.tail = prevNode;
    }
    this.length--;

    return this;
  }
}
