function solution(n, m) {
  // 최대공약수 계산
  function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }

  // 최소공배수 계산
  function lcm(a, b) {
    const gcdValue = gcd(a, b);
    return (a * b) / gcdValue;
  }

  const answer = [gcd(n, m), lcm(n, m)];
  return answer;
}
