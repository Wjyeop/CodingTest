function solution(t, p) {
    let count = 0;

    for (let i = 0; i <= t.length - p.length; i++) {
        const subStr = t.substring(i, i + p.length);
        const subNum = parseInt(subStr);
        const pNum = parseInt(p);

        if (subNum <= pNum) {
            count++;
        }
    }

    return count;
}
