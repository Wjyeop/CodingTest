function solution(numbers) {
    // 문자열 쪼개서 배열에 숫자로 넣기
    var list = numbers.split('').map(num => parseInt(num, 10));
    
    // 조합 저장소
    const combSet = new Set();

    // 조합 생성 함수
    const getCombinations = (arr, selectNum) => {
       const result = [];
       if (selectNum === 1) return arr.map(v => [v]);

       arr.forEach((fixed, index, origin) => {
         const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
         const combinations = getCombinations(rest, selectNum - 1);
         const attached = combinations.map(combination => [fixed, ...combination]);
         result.push(...attached);
       });

       return result;
     };
 
    // 처음부터 numbers 길이까지 모든 조합 생성
    for (let i = 1; i <= list.length; i++) {
       const combinations = getCombinations(list, i);
       combinations.forEach(combination => {
         const numberString = combination.join('');
         const number = parseInt(numberString, 10);
         combSet.add(number);
       });
     }

    // 조합 숫자 중 소수를 answer에 기입
    let answer = 0;
    const isPrime = num => {
       if (num < 2) return false;
       for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) return false;
       }
       return true;
     };
    combSet.forEach(num => {
        if (isPrime(num)) answer++;
    });

    return answer;
}