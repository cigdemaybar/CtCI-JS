'use strict';
export function isUnique(str) {
  var hash = {};
  for (var i = 0; i < str.length; i++) {
    if (hash[str[i]]) {
      hash[str[i]]++;
    } else {
      hash[str[i]] = 1;
    }
  }
  for (var key in hash) {
    if (hash[key] > 1) {
      return false;
    }
  }
  return true;
}
