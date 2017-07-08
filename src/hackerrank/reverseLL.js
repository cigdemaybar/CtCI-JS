function reverseLinkedList(head) {
  var stack = [];
  while (head) {
    stack.unshift(head);
    head = head.next;
  }
  head = stack[0];
  for (var i = 0; i < stack.length; i++) {
    stack[i].next = stack[i + 1];
  }
  return head;
}
