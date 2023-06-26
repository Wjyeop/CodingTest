function solution(s1, s2) {
    var answer = 0;
    if(s1.length <= s2.length){
        for(let i = 0; i < s1.length; i++){
            for(let j = 0; j < s2.length; j++){
                if(s1[i]==s2[j]){
                    answer++;
                }
            }
            
        }
    }else if(s1.length > s2.length){
        for(let i = 0; i < s2.length; i++){
            for(let j = 0; j < s1.length; j++){
                if(s1[j]==s2[i]){
                    answer++;
                }
            }
        }
    }
    
    return answer;
}