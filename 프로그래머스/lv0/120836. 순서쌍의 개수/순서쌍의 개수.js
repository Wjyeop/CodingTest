function solution(n) {
    var answer = 0;
        for(let i=1; i<=n; i++){
            if(n%i == 0){
                answer++
            }
            // for(let j=1; j<=n; j++){
            //     if(i*j == n){
            //         answer++;
            //     }
            // }
        }
    return answer;
}