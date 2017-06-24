'use strict';
export function findStartOfLoop(list){
  if(!list){
    return null;
  }
  var node = list;
  var hash= {};
  while(node.next){
    if(hash[node.val]){
      return node;
    } else {
      hash[node.val] = true;
      node = node.next;
    }
  }
  return null;
}
