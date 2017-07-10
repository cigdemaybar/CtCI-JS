function reverseString(str) {
  var revstr = "";
  for (var i = str.length - 1;  i >=0 ; i--) {
    revstr = revstr + str[i];
  }
  return revstr;
}


function reversedString(str){
  var reversed = "";
  for (var i = 0; i < str.length; i++){
    reversed = str[i] + reversed;
  }
  return reversed;
}

reversedString('abcd')


