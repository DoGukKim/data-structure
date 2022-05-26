class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class CircleLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // 요소의 맨 앞에 노드 삽입
  prepend(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      node.next = this.head;
    } else {
      node.next = this.head;

      // for 문을 활용한 변경
      this.head = node;
      let current = this.head;
      for (let i = 0; i < this.size; i++) {
        current = current.next;
      }
      current.next = node;

      // while로 하는 방법
      // let current = this.head;
      // while (this.head.value !== current.next.value) {
      //   current = current.next;
      // }
      // current.next = node;
      // this.head = node;
    }
    this.size++;
  }

  // 요소의 맨 뒤에 노드 삽입
  push(value) {
    let current = this.head;
    for (let i = 0; i < this.size - 1; i++) {
      current = current.next;
    }
    const node = new Node(value);
    current.next = node;
    node.next = this.head;
    this.size++;
  }

  // 요소 삭제
  delete(value) {
    if (this.head.value === value) {
      let current = this.head;
      for (let i = 0; i < this.size - 1; i++) {
        current = current.next;
      }
      current.next = this.head.next;
      this.head = this.head.next;
    } else {
      let current = this.head;
      while (current.next.value !== value) {
        current = current.next;
      }
      current.next = current.next.next;
    }
    this.size--;
  }
}
