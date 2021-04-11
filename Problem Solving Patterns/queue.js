class Queue {
  constructor() {
    this.data = [];
  }

  add(item = null) {
    this.data.unshift(item);
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  remove() {
    return this.data.pop();
  }
}

const weave = (source1, source2) => {
  const combined = new Queue();

  while (source1.peek() || source2.peek()) {
    if (source1.peek()) {
      combined.add(source1.remove());
    }
    if (source2.peek()) {
      combined.add(source2.remove());
    }
  }

  return combined;
};
