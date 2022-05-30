const inOrderTraversal = (root) => {
  let tree = [];
  const traversal = (node) => {
    if (!node) return;
    traversal(node.left);
    tree.push(node.value);
    traversal(node.right);
  };
  traversal(root);
  return tree;
};

inOrderTraversal([1, null, 2, 3]);
