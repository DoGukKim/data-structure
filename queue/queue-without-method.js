class Queue {
  constructor() {
    this.list = [];
  }

  enqueue(value) {
    this.list[this.list.length] = value;
  }

  dequeue() {
    const result = this.list[0];

    for (let i = 0; i < this.list.length - 1; i++) {
      this.list[i] = this.list[i + 1];
    }
    this.list.length--;

    return result;
  }

  read() {
    return this.list[0];
  }

  clear() {
    this.list = [];
  }
}
