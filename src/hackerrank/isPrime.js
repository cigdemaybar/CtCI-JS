function isPrime(n) {
  if (n < 2) {
    console.log('Not prime');
  } else if (n === 2 || n === 3) {
    console.log('Prime');
  } else {
    var i = n - 1;
    while (i > 1) {
      if (n % i === 0) {
        console.log('Not prime');
        break;
      } else {
        i--;
      }
    }
    if (i === 1) {
      console.log('Prime');
    }
  }
}

