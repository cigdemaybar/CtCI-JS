function deleteNode(head, position) {
  if(!head){
    return null;
  } else {
    if(position === 0){
      head = head.next;
      return head;
    } else {
      var current = head;
      while(position -1 > 0){
        if(current.next){
          current = current.next;
          position--;
        } else {
          break;
        }
      }
      current.next = current.next.next;
      return head;
    }
  }
}
