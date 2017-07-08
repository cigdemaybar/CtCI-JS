function reversePrint(head) {
  var nodes = [];
  while (head) {
    nodes.unshift(head.data);
    head = head.next;
  }
  for (var i = 0; i < nodes.length; i++) {
    console.log(nodes[i]);
  }
}
