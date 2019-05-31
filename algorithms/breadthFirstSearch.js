function bfs(root) {
  let queue = new Queue();
  queue.enqueue(root);
  while (!queue.isEmpty()) {
    let current = queue.dequeue();
    visit(current);
    if (current.left) queue.enqueue(current.left);
    if (current.right) queue.enqueue(current.right);
  }
}
