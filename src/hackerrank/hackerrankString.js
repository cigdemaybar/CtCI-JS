function main() {
  var q = parseInt(readLine());
  for (var a0 = 0; a0 < q; a0++) {
    var s = readLine();
    // your code goes here
    s = s.split('');
    var h = 'hackerrank'.split('');
    while (h.length && s.length) {
      if (s[0] !== h[0]) {
        s.shift();
      } else {
        s.shift();
        h.shift();
      }
    }
    if (h.length > 0) {
      console.log('NO');
    } else {
      console.log('YES');
    }
  }

}
