class Stack {
  constructor() {
    // 배열이나, 연결 리스트로 사용해도 좋다.
    this.stack = [];
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    if (this.stack.length > 0) return false;
    return true;
  }
}
