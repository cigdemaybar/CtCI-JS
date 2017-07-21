function alternatingCharacters(s){
    // Complete this function
  var last = s[0];
  var del = 0;
  for(var i = 1; i < s.length; i++ ){
    (s[i] === last) ? del++ : last = s[i];
  }
  return del;
}
