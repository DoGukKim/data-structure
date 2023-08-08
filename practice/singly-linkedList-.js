class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class SingleLinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 맨 앞에 노드 삽입
  prepend(value) {
    if (this.head === null) this.head = new Node(value);
    this.head = new Node(value, this.head);
    this.size += 1;
  }

  // 맨 뒤에 노드 삽입
  push(value) {
    if (this.head === null) this.prepend(value);
    let current = this.head;
    while (current.next !== null) current = current.next;
    current.next = new Node(value);
    this.size += 1;
  }

  // value로 노드 삭제
  delete(value) {
    let current = this.head;
    while (current.next.value !== value) {
      current = current.next;
    }
    current.next = current.next.next;
    this.size--;
  }

  // index로 해당 노드 얻기
  getNodeAt(index) {
    if (!this.isOutOfRange(index)) {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  // 원하는 index에 노드 삽입
  insertAt(index, value) {
    if (!this.isOutOfRange(index)) {
      if (index === 0) return this.prepend(value);

      const previous = this.getNodeAt(index - 1);
      const current = previous.next;
      previous.next = new Node(value, current);
      this.size++;
    }
  }

  // 원하는 index의 노드 제거
  removeAt(index) {
    if (!this.isOutOfRange(index)) {
      if (index === 0) {
        this.head = this.head.next;
        this.size--;
        return;
      }
      const previous = this.getNodeAt(index - 1);
      const current = previous.next;
      previous.next = current.next;
      this.size--;
    }
  }

  // reverse
  reverse() {
    let current = this.head;
    let previous = null;
    let next = null;
    while (current !== null) {
      next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }
    this.head = previous;
  }

  // Method indexOf
  indexOf(value) {
    const current = this.head;
    for (let i = 0; i < this.size && current !== null; i++) {
      if (current.value === value) return i;
      current = current.next;
    }
    return -1;
  }

  // 범위 체크
  isOutOfRange(index) {
    return index < 0 || index >= this.size;
  }

  clear() {
    this.head = null;
  }

  size() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
}
