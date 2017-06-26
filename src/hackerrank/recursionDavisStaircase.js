function steps(num) {
  if (num > 3) {
    return steps(num - 1) + steps(num - 2) + steps(num - 3);
  } else if (num === 2) {
    return 2;
  } else if (num === 1) {
    return 1;
  } else if (num === 3) {
    return 4;
  }
}
