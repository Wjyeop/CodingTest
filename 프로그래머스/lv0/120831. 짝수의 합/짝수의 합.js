function solution(n) {
    var answer = 0;
    for(let i = 2; i <= n; i++){
        answer+=i
        i++
    }
    return answer;
}