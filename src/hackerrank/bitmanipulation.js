function lonelyInteger(arr) {
  var unique = 0;
  for (var i = 0; i < arr.length; i++) {
    unique = unique ^ arr[i];
  }
  console.log(unique);
}
