class BinarySearchTree {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }

  // 노드 삽입
  insert(value) {
    if (this.value === null) return (this.value = value);
    // 왼쪽 노드
    if (value < this.value) {
      if (this.left === null) return (this.left = new BinarySearchTree(value));
      else return this.insert(value);
    }
    // 오른쪽 노드
    if (value > this.value) {
      if (this.right === null)
        return (this.right = new BinarySearchTree(value));
      else return this.insert(value);
    }
  }

  // 노드 삭제
  // 추 후 업데이트

  // 노드 찾기
  find(value) {
    if (this.value === value) return this;
    if (value < this.value && this.left) return this.find(value);
    if (value > this.value && this.right) return this.find(value);
  }

  // 포함 여부
  contains(value) {
    return !!this.find(value);
  }
}
