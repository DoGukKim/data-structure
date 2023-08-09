class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // non recursive version
  insert(value) {
    const node = new TreeNode(value);

    if (this.root === null) {
      this.root = node;
      return null;
    }

    let currentNode = this.root;
    while (true) {
      if (value === currentNode.value) return null;

      if (value < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = node;
          return null;
        }

        currentNode = currentNode.left;
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          return null;
        }

        currentNode = currentNode.right;
      }
    }
  }

  // non recursive version
  search(value) {
    if (this.root === null) return false;

    let currentNode = this.root;
    while (currentNode !== null) {
      if (value === currentNode.value) return true;

      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  delete(value) {
    if (this.root === null) return null;

    let currentNode = this.root;
    let parentNode = null;

    while (currentNode !== null) {
      if (value === currentNode.value) {
        break;
      } else if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else {
        parentNode = currentNode;
        currentNode = currentNode.right;
      }
    }

    if (currentNode === null) return null;

    // 삭제 노드가 자식이 없는 경우
    if (currentNode.left === null && currentNode.right === null) {
      // 부모 노드가 null이라는 것은, 현재 노드가 root임을 의미
      if (parentNode === null) {
        this.root = null;
      }
      //   TODO: 마저 구현
    }
  }
}

const bt = new BinarySearchTree();
bt.insert(3);
bt.insert(1);
bt.insert(4);

console.log(bt);
console.log(bt.search(4));
