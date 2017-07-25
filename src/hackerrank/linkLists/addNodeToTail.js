function insert(head, data) {
    if(!head){
        head = new Node(data)
    } else {
        var node = head
        while(node.next){
            node = node.next;
        }
        node.next = new Node(data)
    }
    return head
}
