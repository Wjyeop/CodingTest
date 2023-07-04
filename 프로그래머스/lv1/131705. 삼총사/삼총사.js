function solution(number) {
  let count = 0;  // 삼총사 방법의 수를 세는 변수

  // 재귀적으로 가능한 조합을 생성하고 합을 계산하는 함수
  function findTriplets(currentSum, startIndex, selected) {
    if (selected.length === 3) {  // 3명의 학생을 선택한 경우
      if (currentSum === 0) {  // 합이 0인 경우
        count++;  // 삼총사 방법의 수 증가
      }
      return;
    }

    for (let i = startIndex; i < number.length; i++) {
      selected.push(number[i]);  // 학생 추가
      findTriplets(currentSum + number[i], i + 1, selected);  // 재귀 호출
      selected.pop();  // 학생 제거
    }
  }

  findTriplets(0, 0, []);  // 재귀 함수 호출

  return count;
}