import Node from "./tree/binarySearchTree/binaryTreeNode.js";

export default class BinarySearchTree {
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

  insert(key, value = key, node = this.root) {
    if (key < node.key) {
      if (node.left === null) {
        node.left = new Node(key, value, node);
      } else {
        this.insert(key, value, node.left);
      }
    } else if (key > node.key) {
      if (node.right === null) {
        node.right = new Node(key, value, node);
      } else {
        this.insert(key, value, node.right);
      }
    }
  }

  has(key) {
    const isHas = this.postOrder().some((value) => value === key);
    return isHas;
  }

  remove(key, node = this.root) {
    if (!node) return null;
    else if (key < node.key) {
      node.left = this.remove(key, node.left);
      return node;
    } else if (key > node.key) {
      node.right = this.remove(key, node.right);
      return node;
    } else if (key === node.key) {
      if (!node.left) return node.right;
      else if (!node.right) return node.left;
      else {
        node.right = this.lift(node.right, node);
        return node;
      }
    }
  }

  lift(node, nodeToRemove) {
    if (node.left) {
      node.left = this.lift(node.left, nodeToRemove);
      return node;
    } else {
      nodeToRemove.key = node.key;
      return node.right;
    }
  }
}
