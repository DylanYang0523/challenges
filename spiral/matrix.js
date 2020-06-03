/**
 * https://leetcode.com/problems/spiral-matrix/
 * 54. Spiral Matrix
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (!matrix || matrix.length < 1) return [];
    
    const m = matrix.length;
    const n = matrix[0].length;
    const ans = [];
    
    // right: 1, down: 2, left: 3, up: 4
    let direction = 1;
    let horizatal = matrix[0].length;
    let vertical = matrix.length - 1;
    let times = 0;
    while (vertical >= 0 && horizatal >= 0) {
        if (direction === 1) {
            for (let i = times; i < n - times; i++) {
                ans.push(matrix[times][i]);
            }
            horizatal -= 1;
            direction = 2;
        } else if (direction === 2) {
            for (let i = times + 1; i < m - times; i++) {
                ans.push(matrix[i][n - 1 - times]);
            }
            vertical -= 1;
            direction = 3;
        } else if (direction === 3) {
            for (let i = n - 1 - times - 1; i >= times; i--) {
                ans.push(matrix[m - 1 - times][i]);
            }
            horizatal -= 1;
            direction = 4;
        } else {
            for (let i = m - 1 - times - 1; i >= times + 1; i--) {
                ans.push(matrix[i][times]);
            }
            vertical -= 1;
            direction = 1;
            times += 1;
        }
    }
    
    return ans;
};