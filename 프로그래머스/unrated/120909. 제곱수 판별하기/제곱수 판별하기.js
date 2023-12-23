function solution(n) {
    var sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) {
        return 1;
    } else {
        return 2;
    }
}
