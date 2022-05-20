class Node {
  constructor(value, next = null, previous = null) {
    this.value = value;
    this.next = next;
    this.previous = previous;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // 노드 맨 앞에 삽입
  prepend(value) {
    const node = new Node(value, this.head);
    if (this.head === null) this.head = node;
    else this.head = this.head.previous = node;

    if (this.tail === null) this.tail = node;
    this.size++;
  }

  //노드 맨 뒤에 삽입
  push(value) {
    if (this.head === null) {
      this.prepend(value);
      return;
    }

    const node = new Node(value);
    this.tail.next = node;
    node.previous = this.tail;
    this.tail = node;
    this.size++;
  }

  // Value로 노드 값 삭제
  delete(value) {
    if (this.head === null) return null;
    // 첫 번째에 해당될 때
    if (this.head.value === value) {
      this.head = this.head.next;
      this.head.previous = null;
      this.size--;
      return;
    }
    // 마지막 번째에 해당 될 때
    if (this.tail.value === value) {
      this.tail = this.tail.previous;
      this.tail.next = null;
      this.size--;
      return;
    }
    // 그 나머지 경우
    let current = this.head;
    while (current !== null) {
      if (current.value === value) {
        current.previous.next = current.next;
        current.next.previous = current.previous;
        break;
      }
      current = current.next;
    }
    this.size--;
  }

  // 헤드 노드 삭제하기
  deleteHead() {
    if (this.head === null) return null;

    const deletedHead = this.head;
    if (this.head) {
      this.head = this.head.next;
      this.head.previous = null;
    } else {
      this.head = null;
      this.tail = null;
    }
    this.size--;
    return deletedHead;
  }

  // 꼬리 노드 삭제
  deleteTail() {
    if (this.tail === null) return null;

    const deletedTail = this.tail;
    if (this.tail === this.head) {
      this.head = null;
      this.tail = null;
    }

    if (this.tail) {
      this.tail = this.tail.previous;
      this.tail.next = null;
    }

    this.size--;
    return deletedTail;
  }

  // Method find
  find(value, callback) {
    if (this.head === null) return null;
    let current = this.head;
    while (current !== null) {
      if (callback && callback(current.value)) {
        return current;
      }
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
  }

  // 배열 안의 값들을 연결 리스트에 넣음
  fromArray(values) {
    values.forEach((value) => this.prepend(value));
  }

  // 모든 노드를 배열로 반환
  toArray() {
    const nodes = [];
    let current = this.head;
    while (current) {
      nodes.push(current);
      current = current.next;
    }
    return nodes;
  }
}
