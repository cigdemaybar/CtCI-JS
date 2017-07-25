function inc(hash, n, s) {
  for (var key in hash) {
    var ind = s.indexOf(key);
    var val = s.charCodeAt(ind) - 96;
    if (n % val === 0) {
      if (val * hash[key] >= n) {
        return ('Yes');
      }
    }
  }
  return ('No');
}
function main() {
  var s = readLine();
  var n = parseInt(readLine());
  var hash = {};
  for (var i = 0; i < s.length; i++) {
    (hash[s[i]]) ? hash[s[i]]++ : hash[s[i]] = 1;
  }
  //var hash2 = {}
  for (var key in hash) {
    var v = hash[key];
    for (var i = 2; i <= v; i++) {
      var sub = key.repeat(i);
      if (!s.includes(sub)) {
        hash[key] = i - 1;
        break;
      }
    }
  }

  for (var a0 = 0; a0 < n; a0++) {
    var x = parseInt(readLine());
    // your code goes here
    var res = inc(hash, x, s);
    console.log(res);
  }

}
