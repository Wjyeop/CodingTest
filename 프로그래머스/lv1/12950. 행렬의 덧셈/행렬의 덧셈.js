function solution(arr1, arr2) {
    const rows = arr1.length;
    const cols = arr1[0].length;
    const result = [];

    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }

    return result;
}
