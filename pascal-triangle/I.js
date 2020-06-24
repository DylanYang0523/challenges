/**
 * https://leetcode.com/problems/pascals-triangle/submissions/
 * 118. Pascal's Triangle
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const pascal = [];
    for (let i = 0; i < numRows; i++) {
        if (i === 0) {
            pascal[i] = [1];
        } else if (i === 1) {
            pascal[i] = [1, 1];
        } else {
            pascal[i] = [1];
            for (let j = 1; j < i; j++) {
                pascal[i].push(pascal[i - 1][j - 1] + pascal[i - 1][j]);
            }
            pascal[i].push(1);
        }
    }
    return pascal;
};