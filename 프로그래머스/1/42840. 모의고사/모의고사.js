function solution(answers) {
    const A = [1, 2, 3, 4, 5];
    const B = [2, 1, 2, 3, 2, 4, 2, 5];
    const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    let scoreA = 0, scoreB = 0, scoreC = 0;

    answers.forEach((ans, i) => {
        if (ans === A[i % A.length]) scoreA++;
        if (ans === B[i % B.length]) scoreB++;
        if (ans === C[i % C.length]) scoreC++;
    });

    const maxScore = Math.max(scoreA, scoreB, scoreC);
    let result = [];
    if (scoreA === maxScore) result.push(1);
    if (scoreB === maxScore) result.push(2);
    if (scoreC === maxScore) result.push(3);
    
    console.log(scoreA, scoreB, scoreC);
    return result;
}
