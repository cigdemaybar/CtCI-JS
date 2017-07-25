function insert(head, data) {
  if (!head) {
    head = new Node(data);
  } else {
    var node = new Node(data);
    var temp = head;
    head = node;
    head.next = temp;
  }
  return head;
}
