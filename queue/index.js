class Queue {
  constructor() {
    // 배열이나, 연결 리스트로 사용해도 좋다.
    this.queue = [];
  }

  enqueue(value) {
    this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  read() {
    return this.queue[0];
  }
}
