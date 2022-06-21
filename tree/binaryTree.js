class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  DFS(root) {
    if (root === null) return [];
    const stack = [root];

    while (stack.length > 0) {
      const current = stack.pop();
      console.log(current.value);

      if (current.left) stack.push(current.left);
      if (current.right) stack.push(current.right);
    }
  }

  RecursionDFS(root) {
    if (root === null) return [];
    const leftValues = this.RecursionDFS(root.left);
    const rightValues = this.RecursionDFS(root.right);
    return [root.value, ...leftValues, ...rightValues];
  }

  BFS(root) {
    if (root === null) return [];
    const queue = [root];
    while (queue.length > 0) {
      const current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
}
