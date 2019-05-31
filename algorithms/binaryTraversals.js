function preOrder(node) {
  if (node != null) {
    visit(node);
    preOrder(node.left);
    preOrder(node.right);
  }
}

function inOrder(node) {
  if (node != null) {
    inOrder(node.left);
    visit(node);
    inOrder(node.right);
  }
}

function postOrder(node) {
  if (node != null) {
    postOrder(node.left);
    postOrder(node.right);
    visit(node);
  }
}
