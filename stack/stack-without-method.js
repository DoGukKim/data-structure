class Stack {
  constructor() {
    this.list = [];
  }

  push(value) {
    this.list[this.list.length] = value;
  }

  pop() {
    const result = this.list[this.list.length - 1];
    this.list.length--;

    return result;
  }

  clear() {
    this.list = [];
  }
}
