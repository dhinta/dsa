class Stack {
  constructor() {
    this.data = [];
  }

  push(item = null) {
    this.data.push(item);
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  pop() {
    return this.data.pop();
  }
}
