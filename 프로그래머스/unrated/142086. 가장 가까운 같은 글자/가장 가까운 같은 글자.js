function solution(s) {
    const result = [];
    const charIndexMap = {}; // 각 문자의 최근 등장 위치를 기록할 해시 맵

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char in charIndexMap) {
            // 이미 등장한 문자인 경우
            const prevIndex = charIndexMap[char];
            result.push(i - prevIndex);
        } else {
            // 처음 등장한 문자인 경우
            result.push(-1);
        }

        charIndexMap[char] = i; // 현재 위치를 해시 맵에 기록
    }

    return result;
}