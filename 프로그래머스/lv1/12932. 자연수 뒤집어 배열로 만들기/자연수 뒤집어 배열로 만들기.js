function solution(n) {
    var answer = [];
    var j = n.toString();
    var k = j.length
    for(let i = 0; i<k; i++){
        answer[i] = n%10
        n=Math.floor(n/10)
    }
    return answer;
}