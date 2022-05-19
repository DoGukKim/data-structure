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
    this.stack[this.stack.length - 1];
  }
}
