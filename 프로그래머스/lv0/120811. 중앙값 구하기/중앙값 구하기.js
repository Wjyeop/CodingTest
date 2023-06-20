function solution(array) {
    const sortedArray = array.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedArray.length / 2);

    return sortedArray[middleIndex];
}