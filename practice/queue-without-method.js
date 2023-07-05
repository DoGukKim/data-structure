class Queue {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  enqueue(value) {
    this.items[this.size] = value;
    this.size++;

    return null;
  }

  dequeue() {
    // shifting
    if (this.size === 0) return null;

    const result = this.items[0];

    for (let i = 0; i < this.size; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.items.length = this.size - 1;
    this.size--;

    return result;
  }
}

const queue = new Queue();
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);
queue.dequeue();
queue.dequeue();
console.log(queue);
