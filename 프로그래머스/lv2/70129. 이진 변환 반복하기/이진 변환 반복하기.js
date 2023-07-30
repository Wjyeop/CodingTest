function binaryConversion(s) {
  let count = 0;
  let removedZeros = 0;

  while (s !== '1') {
    removedZeros += (s.match(/0/g) || []).length;
    s = (s.match(/1/g) || []).length.toString(2);
    count++;
  }

  return [count, removedZeros];
}

function solution(s) {
  return binaryConversion(s);
}