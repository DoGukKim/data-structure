import { SingleLinkList } from "./singly-linked-list";

export class Queue {
  constructor() {
    this.list = new SingleLinkList();
  }

  prepend(value) {
    this.list.prepend(value);
    return null;
  }

  push(value) {
    this.list.push(value);
    return null;
  }

  shift() {
    const result = this.list.shift();
    return result;
  }
}
