function isPrime(n) {
  if (n < 2) {
    console.log('Not prime');
  } else if (n === 2 || n === 3) {
    console.log('Prime');
  } else {
    var i = 2;
    while (i < n) {
      if (n % i === 0) {
        console.log('Not prime');
        break;
      } else {
        i++;
      }
    }
    if (i === n) {
      console.log('Prime');
    }
  }
}

