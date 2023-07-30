function solution(n) {
  let count = 0;

  for (let k = 1; k <= n; k++) {
    if (n % k === 0 && k % 2 === 1) {
      count++;
    }
  }

  return count;
}
