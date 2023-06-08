function solution(n) {
    let answer = (n % 7 == 0) ? n / 7 : n / 7 + 1;
    
    return Math.floor(answer);
}