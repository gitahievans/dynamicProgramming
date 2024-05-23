function fibonacci(n) {
  // In the fibinacci seaquence, each number is a sum of the preceding two numbers.
  let fibArray = [];

  fibArray[0] = 0;
  fibArray[1] = 1;

  for (let i = 2; i <= n; i++) {
    fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
  }
  console.log(fibArray);

  return fibArray[n];
}

// console.log(fibonacci(10));

function fibByMemoization(n, memo = {}) {
  // have a memo object as a param to this function to store n values whose fibonacci numbers have already been calculated.
  // If these numbers are ecncounterd again, they will not trigger a new calculation

  if (n <= 1) return n;
  if (n in memo) {
    return memo[n];
  }

  for (let i = 2; i <= n; i++) {
    memo[n] = fibByMemoization(i - 1, memo) + fibByMemoization(i - 2, memo);
  }

  return memo[n];
}

console.log(fibByMemoization(7));
