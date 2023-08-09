import { DoublyLinkedList } from "../linked-list/doubly-linked-list.js";

export class Stack {
  constructor() {
    this.list = new DoublyLinkedList();
  }

  push(value) {
    this.list.push(value);
  }

  pop() {
    return this.list.pop();
  }

  read() {
    return this.list.head.value;
  }

  clear() {
    this.list.clear();
  }
}
