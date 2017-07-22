function check_Satisfied(s, char1, char2){
  var newS = '';
  var next;
  var current;
  var temp;
  (s.indexOf(char1) < s.indexOf(char2)) ? (current = char1, next = char2) : (current = char2, next = char1);
  for(var i =  s.indexOf(current); i < s.length; i++){
    if (s[i] === current ) {
      newS += s[i]
      temp = current
      current = next
      next = temp
    } else if (s[i] === next){
      return "";
    }
  }
  console.log('newS:', newS)
  return newS;
}

//check_Satisfied('txbvdvskhlmckbxdvofmsvbvkswlkrchohwulfuvlwxtlcxskrldbxtykbukcrwvfolcrdmfd', "k", "l")

function twoChars(s){
  while(true){
    var del= null;
    for(var i = 0; i < s.length; i++){
      if(s[i]=== s[i+1]){
        del = new RegExp(s[i], "gi")
        s = s.replace(del,'')
      }
    }
    if (del === null){
      break
    }
  }
  console.log(s)
  var obj = {};
  for(var i = 0; i < s.length; i++){
    obj[s[i]] ? obj[s[i]]++ : obj[s[i]] = 1;
  }
  if(Object.keys(obj).length < 2) {
    return 0
  }
  var arr = [];
  for (var prop in obj) {
    arr.push({
      'key': prop,
      'value': obj[prop]
    });
  }
  arr.sort(function(a, b) { return b.value - a.value; });
  //console.log(arr)
  var result = 0;
  for (var i = 0; i < arr.length; i++){
    for(var j= i+1; j < arr.length; j++)  {
      if(arr[i].value - arr[j].value <= 1) {
        r = check_Satisfied(s, arr[i].key, arr[j].key)
        if(r) {
          (r.length > result) ? result = r.length : result = result;
        }
      }
    }
 }
 return result
}

//twoChars('txnbvnzdvasknhlmcpkbxdvofimsvqbvkswlkrchohwuplfujvlwpxtlcixpajjpaskrnjneelqdbxtiyeianqjqaikbukpicrwpnjvfpzolcredzmfaznnzd')
//twoChars('clmgakmobtdtdvqttrpgzkjmhcwnflzuazzobixbnyzxbgoszbneqfshlzqspjxtbxhyybxklcqiheeqmkjfpgcjzgzlsanhikvprhedxbvyyksppxkcywwobeakjuvmzzdjptjkzvvovbmakdhabbwrvnztzxoptsytwjgglfdgyhpffwrtqbjgcarmnmuvniwvozocwukpdmaktuqqsufxdqazjppqkolcxsjonluxkhqnwsyudlyvmtgblbzqmjifqpgibndldpdkdsqeesikxwmnrzepefbveihjeacodnljfxjdniribcumqrcnwexjbahwuct')

//twoChars('beabeefeab')

//twoChars('afebdsddassaefaesd')

//twoChars('a')


