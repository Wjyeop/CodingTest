function solution(brown, yellow) {
    var answer = [];
    let 가로세로 = (brown + 4) / 2;
    let 최소가로 = 가로세로 / 2;
    let 최대가로 = 가로세로 - 3;
    
    for(let 가로 = 최대가로; 가로 >= 최소가로; 가로--){
        let 세로 = 가로세로 - 가로;
        let 노랑의수 = (가로 - 2) * (세로 - 2);
        if(yellow == 노랑의수){
            answer = [가로, 세로];
            break;
        }
    }
    return answer;
}