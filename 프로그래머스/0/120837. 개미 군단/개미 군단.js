function solution(hp) {
    let num1 = Math.floor(hp / 5); // 장군개미 수
    let x = hp % 5;
    let num2 = Math.floor(x / 3); // 병정개미 수
    let num3 = x % 3; // 일개미 수

    return num1 + num2 + num3;
}
