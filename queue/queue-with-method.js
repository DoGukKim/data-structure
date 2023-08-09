class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list.unshift(value);
  }

  dequeue() {
    return this.list.shift();
  }

  read() {
    return this.list[0];
  }

  clear() {
    this.list = [];
  }
}
