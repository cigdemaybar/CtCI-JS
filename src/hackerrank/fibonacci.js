function fib(n) {
  if (n === 1 || n === 2) return 1;
  else {
    return fib(n - 1) + fib(n - 2);
  }
}

function fibonacci(n){
  return fibonacci[n] || (fibonacci[n] = (n===1 || n===2) ? 1 : fibonacci(n-1) + fibonacci(n-2));
}
