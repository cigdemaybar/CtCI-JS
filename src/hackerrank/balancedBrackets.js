function isBalanced(str) {
  var bracketPairs = {
    '[': ']',
    '(': ')',
    '{': '}'
  };
  var openBrackets = [];
  for (var i = 0; i < str.length; i++) {
    var currentBracket = str[i];
    if (bracketPairs[currentBracket]) {
      openBrackets.push(currentBracket);
    } else {
      if (bracketPairs[openBrackets[openBrackets.length - 1]] !== currentBracket) {
        console.log('NO');
        return;
      } else {
        openBrackets.pop();
      }
    }
  }
  if (openBrackets.length) {
    console.log('NO');
  } else {
    console.log('YES');
  }
}
