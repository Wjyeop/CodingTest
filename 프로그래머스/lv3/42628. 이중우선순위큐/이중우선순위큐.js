function solution(operations) {
  const queue = [];

  for (let i = 0; i < operations.length; i++) {
    const [command, value] = operations[i].split(' ');

    if (command === 'I') {
      queue.push(Number(value)); // 숫자를 큐에 삽입합니다.
      queue.sort((a, b) => a - b); // 오름차순으로 정렬합니다.
    } else if (command === 'D' && queue.length > 0) {
      if (value === '1') {
        queue.pop(); // 최댓값을 삭제합니다.
      } else if (value === '-1') {
        queue.shift(); // 최솟값을 삭제합니다.
      }
    }
  }

  if (queue.length === 0) {
    return [0, 0];
  } else {
    return [queue[queue.length - 1], queue[0]];
  }
}