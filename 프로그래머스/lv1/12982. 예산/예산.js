function solution(d, budget) {
    var answer = 0;
    d.sort((a,b)=>a-b);
    for(let i=0;i<d.length;i++){
        budget = budget - d[i];
        answer++;
        if(budget<0){
            answer--;
            break;
        }
    }
    return answer;
}