function powerTen(num) {
  while (num > 9 && num % 10 === 0) {
    num = num / 10;
  }
  return num === 1;
}

//powerTen(100)
