function mars(S){
  var count = 0;
    for(var i=0; i <S.length; i++){
        var a = i%3;
        if(((a === 0 || a ===2) && (S[i] !== 'S')) || ((a === 1) && (S[i] !== 'O')) ){
            count++;
        }
    }
    console.log(count);
}
