function solution(money) {
    const price = 5500;
    const count = Math.floor(money / price);
    const remaining = money % price;

    return [count, remaining];
}