function solution(s, n) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    // 공백인 경우 그대로 결과에 추가
    if (char === ' ') {
      result += ' ';
      continue;
    }

    let code = s.charCodeAt(i);

    // 대문자인 경우
    if (code >= 65 && code <= 90) {
      code = ((code - 65 + n) % 26) + 65;
    }
    // 소문자인 경우
    else if (code >= 97 && code <= 122) {
      code = ((code - 97 + n) % 26) + 97;
    }

    result += String.fromCharCode(code);
  }

  return result;
}

// function solution(s, n) {
//     let s2 = s.split('');
//     let answer = [];
//     for(let i = 0; i < s.length; i++){
//         answer[i] = String.fromCharCode(s2[i].charCodeAt()+n)
//     }

//     return answer.join('');
// }