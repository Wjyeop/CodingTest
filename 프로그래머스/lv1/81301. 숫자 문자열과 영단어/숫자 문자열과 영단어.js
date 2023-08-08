function solution(s) {
    const numberMap = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9
    };

    let asnwer = "";
    let temp = "";

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) { // 숫자가 아닌 경우 (즉, 영단어인 경우)
            temp += s[i]; // 임시로 문자열에 추가
            if (numberMap[temp] !== undefined) { // 영단어가 매핑되는 경우
                asnwer += numberMap[temp]; // 숫자로 변환하여 결과에 추가
                temp = ""; // 임시 문자열 초기화
            }
        } else { // 숫자인 경우
            asnwer += s[i]; // 그대로 결과에 추가
        }
    }

    return parseInt(asnwer, 10); // 문자열을 정수로 변환하여 반환
}




