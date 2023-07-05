class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  unshift(value) {
    const node = new Node(value);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size++;

      return null;
    }
  }

  shift() {}

  push(value) {
    if (this.size === 0) {
      this.unshift();
      return null;
    }
  }

  pop() {}

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    return null;
  }
}

const dl = new DoublyLinkedList();
dl.unshift(10);
dl.unshift(1);
console.log(dl);
