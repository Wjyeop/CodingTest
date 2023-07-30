// 이진수로 변환하여 1의 개수를 세는 함수
function countOnesInBinary(n) {
  const binaryString = n.toString(2);
  let count = 0;
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      count++;
    }
  }
  return count;
}

// n의 다음 큰 숫자를 찾는 함수
function findNextBigNumber(n) {
  const targetCount = countOnesInBinary(n);
  let nextNumber = n + 1;
  while (true) {
    if (countOnesInBinary(nextNumber) === targetCount) {
      return nextNumber;
    }
    nextNumber++;
  }
}

function solution(n) {
  return findNextBigNumber(n);
}
