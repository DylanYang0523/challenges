/**
 * https://leetcode.com/problems/search-a-2d-matrix-ii/submissions/
 * 240. Search a 2D Matrix II
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    const solutionA = () => {
        // 1. search first row, find the biggest num which smaller than target, and search for all row of the column
        // 2. search first column, find the biggest num which smaller than target, ans search for the row
        const m = matrix.length;
        if (m < 1) return false;

        const n = matrix[0].length;
        if (n < 1) return false;

        let dynamicLen = n;
        for (let i = 0; i < m; i++) {
            if (matrix[i][0] > target) break;
            if (matrix[i][dynamicLen - 1] >= target) {
                for (let j = 0; j < dynamicLen; j++) {
                    if (matrix[i][j] === target) {
                        return true;
                    } else if (matrix[i][j] > target) {
                        dynamicLen = j;
                        break;
                    }
                }
            }
        }

        return false;
    }
    
    const solutionB = () => {
        const m = matrix.length;
        if (m < 1) return false;

        const n = matrix[0].length;
        if (n < 1) return false;
        
        let initM = m - 1;
        let initN = 0;
        
        while (initN < n && initM >= 0) {
            const curr = matrix[initM][initN];
            if (curr === target) return true;
            if (curr < target) {
                initN += 1;
            } else {
                initM -= 1;
            }
        }
        
        return false;
    }
    
    return solutionB();
};
