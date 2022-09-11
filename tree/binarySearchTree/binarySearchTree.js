import Node from "./binaryTreeNode.js";

class BinarySearchTree {
  constructor(key, value = key) {
    this.root = new Node(key, value);
  }

  preOrder() {
    const result = [];

    function dfs(node) {
      if (!node) return null;
      result.push(node.key);
      dfs(node.left);
      dfs(node.right);
    }
    dfs(this.root);

    return result;
  }

  inOrder() {
    const result = [];

    function dfs(node) {
      if (!node) return null;
      dfs(node.left);
      result.push(node.key);
      dfs(node.right);
    }
    dfs(this.root);

    return result;
  }

  postOrder() {
    const result = [];

    function dfs(node) {
      if (!node) return null;
      dfs(node.left);
      dfs(node.right);
      result.push(node.key);
    }
    dfs(this.root);

    return result;
  }

  insert(key, value = key) {
    let node = this.root;
    while (true) {
      if (node.key === key) return false;
      if (node.key > key) {
        // value가 root의 value 보다 작을 때
        if (node.left !== null) node = node.left;
        else {
          node.left = new Node(key, value, node);
          return true;
        }
      } else if (node.key < key) {
        // value가 root의 value 보다 클 때
        if (node.right !== null) node = node.right;
        else {
          node.right = new Node(key, value, node);
          return true;
        }
      }
    }
  }

  has(key) {
    const isHas = this.postOrder().some((value) => value === key);
    return isHas;
  }

  find(key) {
    const value = this.postOrder().find((value) => value === key);
    return value;
  }

  // pending
  remove() {}
}

const bst = new BinarySearchTree(30);
bst.insert(10);
bst.insert(40);
bst.insert(6);
