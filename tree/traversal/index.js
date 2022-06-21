const traversal = (n) => {
  if (n > 7) return;
  // PreOrder
  console.log(n);
  traversal(n * 2);
  // InOrder
  console.log(n);
  traversal(n * 2 + 1);
  // PostOrder
  console.log(n);
};
traversal(1);
