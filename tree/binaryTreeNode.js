export default class BinaryTreeNode {
  constructor(value, parent) {
    this.value = value;
    this.parent = parent || null;
    this.left = null;
    this.right = null;
  }

  get isLeaf() {
    return this.left === null && this.right === null;
  }

  get hasChildren() {
    return !this.isLeaf();
  }
}
