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

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }

    this.size++;
    return null;
  }

  shift() {
    if (!this.head) return null;

    const result = this.head;
    this.head = this.head.next;

    if (this.head !== null) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }

    result.next = null;
    this.size--;
    return result.value;
  }

  push(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node; // 꼬리 다음 포인터에 새로 노드를 할당
      node.prev = this.tail; // 마지막 노드 이전 포인터에 꼬리를 연결
      this.tail = node;
    }

    this.size++;
    return null;
  }

  pop() {
    if (!this.tail) return null;

    const result = this.tail;
    this.tail = this.tail.prev;

    if (this.tail !== null) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    result.next = null;
    this.size--;
    return result.value;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;

    return null;
  }
}
