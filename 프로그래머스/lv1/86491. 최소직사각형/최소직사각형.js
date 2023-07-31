function solution(sizes) {
    // 가장 긴 가로 길이와 세로 길이를 저장할 변수 초기화
    let maxWidth = 0;
    let maxHeight = 0;

    // sizes 배열의 각 요소를 순회
    for (const [w, h] of sizes) {
        // 현재 요소에서 가장 긴 변과 짧은 변을 구함
        const max = Math.max(w, h);
        const min = Math.min(w, h);

        // 현재 요소의 가장 긴 변과 현재까지의 최대 가로 길이를 비교하여 더 큰 값을 선택
        if (max > maxWidth) maxWidth = max;

        // 현재 요소의 가장 짧은 변과 현재까지의 최대 세로 길이를 비교하여 더 큰 값을 선택
        if (min > maxHeight) maxHeight = min;
    }

    // 모든 sizes 배열의 요소를 처리한 후에는 maxWidth와 maxHeight를 곱하여 지갑의 크기를 계산하고, 그 값을 반환
    return maxWidth * maxHeight;
}
