import { DoublyLinkedList } from "../linked-list/doubly-linked-list.js";

export class Queue {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  enqueue(value) {
    this.list.push(value);
  }

  dequeue() {
    return this.list.shift();
  }

  read() {
    return this.list.head.value;
  }

  clear() {
    this.list.clear();
  }
}
