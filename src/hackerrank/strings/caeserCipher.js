
function cipher(s,k){
  var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
  var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  var secret = '';
  k = k % 26
  for(var i = 0; i < s.length; i++){
      if((lowerCase.indexOf(s[i]) < 0) && (upperCase.indexOf(s[i]) < 0) ){
          secret += s[i];
      } else{
          if(lowerCase.includes(s[i])){
              var ind = lowerCase.indexOf(s[i]);
              if (k >=0){

                  if(ind+ k < 26){
                      secret += lowerCase[ind+k]
                  } else {
                      secret += lowerCase[ind+k-26]
                  }
              } else {
                  if(ind+ k < 0){
                      secret += lowerCase[ind+k+26]
                  } else {
                      secret += lowerCase[ind+k]
                  }
              }

          } else {
              var indU = upperCase.indexOf(s[i]);
              if (k >=0){
                  if(indU+ k < 26){
                      secret += upperCase[indU+k]
                  } else {
                      secret += upperCase[indU+k-26]
                  }
              } else {
                  if(indU+ k < 0){
                      secret += upperCase[indU+k+26]
                  } else {
                      secret += upperCase[indU+k]
                  }
              }
          }
      }
  }
  console.log( secret);
}
  cipher('middle-Outz', 28)
