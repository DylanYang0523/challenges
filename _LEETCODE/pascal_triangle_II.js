/**
 * @lv 🟢
 * @link https://leetcode.com/problems/pascals-triangle-ii/
 * @name 119. Pascal's Triangle II
 * @cate #classic
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const pascal = [[1], [1, 1]];
    if (rowIndex < 2) return pascal[rowIndex];

    for (let i = 2; i <= rowIndex; i++) {
        pascal[i] = [1];
        for (let j = 1; j < i; j++) {
            pascal[i].push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
        }
        pascal[i].push(1);
    }

    return pascal[rowIndex];
};