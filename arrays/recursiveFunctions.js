function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log("factorial 5 = ", factorial(5));
console.log("factorial 10 = ", factorial(10));

function fibonacciNumber(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
}

console.log("fibonacciNumber 4", fibonacciNumber(4));
console.log("fibonacciNumber 6", fibonacciNumber(6));
