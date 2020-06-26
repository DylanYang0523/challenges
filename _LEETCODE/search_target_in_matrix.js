/**
 * @lv 🟢
 * @link https://leetcode.com/problems/search-a-2d-matrix/
 * @name 74. Search a 2D Matrix
 */
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    // 1. find the m[0] which equal => return true, break || bigger than return m - 1
    // 2. find in the matrix[idx][], if not found return false
    
    if (matrix.length < 1) return false;
    if (matrix[0].length < 1) return false;
    
    let isFound = false;
    let ans = false;
    let idx = matrix.length - 1;
    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i][0] === target) {
            isFound = true;
            ans = true;
            break;
        } else if (matrix[i][0] > target) {
            if (i === 0) {
                isFound = true;
                break
            }
            idx = i - 1;   
            break;
        }
    }
    
    if (!isFound) {
        for (let i = 0; i < matrix[idx].length; i++) {
            if (matrix[idx][i] === target) {
                ans = true;
                break;
            }
        }
    }
    
    return ans;
};

