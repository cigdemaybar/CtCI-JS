function insert(head, data, position) {
  var node = new Node(data);
  if(!head){
    head = node;

  } else {
    if (position === 0) {
      node.next = head;
      head = node;

    } else {
      var current = head;
      while(position-1 > 0){
        if(current.next !== null){
          current = current.next;
          position--;
        } else{
          break;
        }
      }
      node.next = current.next;
      current.next = node;
    }
  }
  return head;
}
