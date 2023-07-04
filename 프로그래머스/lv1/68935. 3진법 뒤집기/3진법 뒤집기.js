function solution(n) {
    let ternary = '';
    let reversedTernary = '';
    
    function convertToTernary(num) {
        if (num === 0){
            return;
        }
        
        convertToTernary(Math.floor(num / 3));
        ternary += String(num % 3);
    }
    
    convertToTernary(n);
    
    reversedTernary = ternary.split('').reverse().join('');
    const answer = parseInt(reversedTernary, 3);
        
    return answer;
}