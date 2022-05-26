class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  // 노드 삽입
  insert(value) {
    const node = new Tree(value);
    this.children.push(node);
  }

  // 값 유 무
  contain(value) {
    if (this.value === value) return true;
    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contain(value)) return true;
    }
    return false;
  }
}
