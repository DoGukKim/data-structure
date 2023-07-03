class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SingleLinkList {
  constructor() {
    this.head = null;
  }

  push(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }

    let current = this.head;
    while (!current.next) {
      current = current.next;
    }
    current.next = new Node(value);

    return null;
  }

  size() {
    if (!this.head) return 0;

    let current = this.head;
    let count = 0;

    while (!current.next) {
      current = current.next;
      count++;
    }

    return count;
  }

  clear() {
    this.head = null;

    return null;
  }
}
