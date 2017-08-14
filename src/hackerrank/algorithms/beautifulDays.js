//input is string like 20 23 6

function processData(input) {
    //Enter your code here
  var nums =  input.split(' ');
  var count = 0;
  var k = +nums[2];
  for(var i = +nums[0]; i <= +nums[1]; i++){
    var rev = +(i.toString().split('').reverse().join(''));
    if (Math.abs(i-rev) % k === 0 ){
      count++;
    }
  }
  return count;
}

processData('20 23 6');
