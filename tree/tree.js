class TreeNode {
  constructor(value = null) {
    this.value = value;
    this.children = [];
  }

  insert(value) {
    this.children.push(new TreeNode(value));
  }

  contain(value) {
    if (this.value === value) return value;

    for (let i = 0; i < this.children.length; i++) {
      if (this.children[i].contain(value)) return true;
    }

    return false;
  }
}
