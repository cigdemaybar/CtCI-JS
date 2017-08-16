function main() {
  h = readLine().split(' ');
  h = h.map(Number);
  var word = readLine();
  var max = 0;
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  for (var i = 0; i < word.length; i++) {
    var ind = alphabet.indexOf(word[i]);
    if (max <= h[ind]) {
      max = h[ind];
    }
  }
  return (max * word.length);
}
