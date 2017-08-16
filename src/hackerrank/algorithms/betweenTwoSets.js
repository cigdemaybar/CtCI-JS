function betweenTwoSets(a,b){
  var sortedB = b.sort((x,y) => x-y);
  var sortedA = a.sort((x,y) => y-x);
  //sortedB[0] is the min of the b array. sortedA[0] is the max of a array
  if (sortedB[0] < sortedA[0]){
    return 0;
  }
  var y = [];
  for(var j = sortedB[0]; j >= sortedA[0]; j--){
    for( var i = 0; i < sortedB.length; i++){
      if(sortedB[i] % j !== 0){
        break;
      } else {
        if( i === sortedB.length -1){
          y.push(j);
        }
      }
    }
  }
  var x = [];
  for(let i = 0; i < y.length; i++){
    for(let j = 0; j < sortedA.length; j++){
      if(y[i]% sortedA[j] !== 0){
        break;
      } else {
        if( j === sortedA.length -1){
          x.push(y[i]);
        }
      }
    }
  }
  return x.length;
}

var a = [2, 4];
var b = [16, 32, 96];

betweenTwoSets(a,b);
