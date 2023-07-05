class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  push(value) {
    this.items[this.size] = value;
    this.size++;

    return null;
  }

  pop() {
    if (this.size === 0) return null;

    const deleteItem = this.items[this.size - 1];
    this.items.length = this.size - 1;
    this.size--;

    return deleteItem;
  }

  clear() {
    this.items = [];

    return null;
  }
}
