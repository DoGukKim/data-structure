class Heap {
  constructor() {
    this.container = [];
  }

  // 왼쪽 자식 인덱스
  leftChildIndex(parentIndex) {
    return parentIndex * 2 + 1;
  }

  // 오른쪽 자식 인덱스
  rightChildIndex(parentIndex) {
    return parentIndex * 2 + 2;
  }

  // 부모 노드 인덱스
  parentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  // 부모 유 무
  hasParent(childIndex) {
    return this.parentIndex(childIndex) >= 0;
  }

  hasGreaterChild(index) {
    const leftChildIndex = this.leftChildIndex(index);
    const rightChildIndex = this.rightChildIndex(index);
    return (
      (leftChildIndex &&
        this.container[leftChildIndex] > this.container[index]) ||
      (rightChildIndex &&
        this.container[rightChildIndex] > this.container[index])
    );
  }

  calcLagerChild(index) {
    if (!this.container[this.rightChildIndex(index)]) {
      return this.leftChildIndex(index);
    }

    if (
      this.container[this.rightChildIndex(index)] >
      this.container[this.leftChildIndex(index)]
    ) {
      return this.rightChildIndex(index);
    } else {
      return this.leftChildIndex(index);
    }
  }

  // 삽입
  insert(value) {
    this.container.push(value);
    this.heapifyUp();
    return this;
  }

  // 삭제
  delete() {
    this.container.shift(); // 루트 노드 삭제
    this.container.unshift(this.container.pop()); // 마지막 노드 루트 노드로 삽입
    this.heapifyDown();
    return this;
  }

  heapifyUp() {
    let lastIndex = this.container.length - 1;

    // 부모가 존재하고 마지막 노드가 부모 노드 보다 클 때 반복합니다.
    while (
      this.hasParent(lastIndex) &&
      this.container[lastIndex] > this.container[this.parentIndex(lastIndex)]
    ) {
      // 스왑
      [this.container[this.parentIndex(lastIndex)], this.container[lastIndex]] =
        [
          this.container[lastIndex],
          this.container[this.parentIndex(lastIndex)],
        ];

      // 인덱스 업데이트
      lastIndex = this.parentIndex(lastIndex);
    }
  }

  heapifyDown() {
    let currentIndex = 0;
    let largerIndex = this.calcLagerChild(currentIndex);

    while (this.hasGreaterChild(currentIndex)) {
      [this.container[currentIndex], this.container[largerIndex]] = [
        this.container[largerIndex],
        this.container[currentIndex],
      ];

      currentIndex = largerIndex;
    }
  }
}

const h = new Heap();
h.insert(10);
h.insert(20);
h.insert(30);
h.insert(15);
h.insert(25);

h.delete();
console.log(h);
