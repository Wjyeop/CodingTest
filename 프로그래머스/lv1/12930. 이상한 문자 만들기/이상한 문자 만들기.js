function solution(s) {
    const words = s.split(" ");
    const result = [];
    
    for(let word of words) {
        let convertedWord = "";
        for(let i = 0; i < word.length; i++){
            if(i % 2 === 0){
                convertedWord += word[i].toUpperCase();
            } else {
                convertedWord += word[i].toLowerCase();
            }
        }
        result.push(convertedWord);
    }
    return result.join(" ");
}