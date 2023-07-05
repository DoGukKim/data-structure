class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SingleLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  prepend(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.size++;
      return null;
    }

    let current = this.head;
    this.head = new Node(value);
    this.head.next = current;
    this.size++;
  }

  push(value) {
    if (!this.head) {
      this.prepend();

      return null;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = new Node(value);
    this.size++;

    return null;
  }

  pop() {
    if (!this.head) return null;

    let current = this.head;
    let prev = null;
    while (current.next !== null) {
      current = current.next;
      prev = current;
    }
    prev.next = null;
    this.size--;

    return null;
  }

  shift() {
    if (!this.head) return null;

    const result = this.head;
    this.head = this.head.next;
    result.next = null;
    this.size--;

    return result;
  }

  size() {
    return this.size;
  }

  clear() {
    this.head = null;

    return null;
  }
}
