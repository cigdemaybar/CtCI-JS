function dynamicArray(arr){
  var lastAnswer = 0;
  var n = arr[0][0];
  var seqList = new Array();
  for(let i = 1; i <= n; i++){
    seqList.push(new Array());
  }
  // console.log(seqList);
  var q = arr[0][1];
  var x, y, seqInd;
  for(let i = 1; i <= q; i++){
    x = arr[i][1];
    y = arr[i][2];
    seqInd = (x^lastAnswer) % n ;
    //console.log(seqInd)
    if(arr[i][0] === 1) {
      seqList[seqInd].push(y);
    } else if (arr[i][0] === 2) {
      lastAnswer = seqList[seqInd][y % (seqList[seqInd].length)];
      console.log(lastAnswer);
    }
    //console.log(seqList)
  }
}
var input =  [ [ 2, 5 ], [ 1, 0, 5 ], [ 1, 1, 7 ], [ 1, 0, 3 ], [ 2, 1, 0 ], [ 2, 1, 1 ] ];

dynamicArray(input);
