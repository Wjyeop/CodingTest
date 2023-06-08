function solution(num) {
    var answer = 0;  
    var j = 0
    for(let i = 1; i <= 500; i++){
        if(num%2 === 0){
            num = num/2
            answer++;
            if(num === 1){
                break;
            }
        }
        if(num%2 !== 0){
            if(num === 1){
                break;
            }
            num = (3 * num) + 1
            answer++;
                
        }
    }
    return answer > 499 ? -1 : answer ;
}