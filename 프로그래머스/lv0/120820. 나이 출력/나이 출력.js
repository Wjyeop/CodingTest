function solution(age) {
    var answer = 2000;
    for(let i = 0; i < 100; i ++){
        if(age > 23){
            age--;
            answer--;
        }
        else if(age < 23){
            age++;
            answer++;
        }
        else{
            break;
        }
    }
    return answer;
}