function solution(s) {
    const words = s.split(' ');
    
    const jadenCaseWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    const jadenCaseString = jadenCaseWords.join(' ');
    
    return jadenCaseString;
}