/**
 * @lv 🔴
 * @link https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/submissions/
 * @name 188. Best Time to Buy and Sell Stock IV
 * @cate #dp_table, #to_be_sanitized, #editor_pick
 */
/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(k, prices) {
    const solutionA = () => {
        // didn't pass the space complexity
        if (prices.length < 2) return 0;
        const matrix = [];
        for (let i = 0; i <= k; i++) {
            let prevMax = Number.MIN_SAFE_INTEGER;
            matrix[i] = [];
            for (let j = 0; j < prices.length; j++) {
                if (i === 0) {
                    matrix[i][j] = 0;
                    continue;
                }
                if (j === 0) {
                    matrix[i][j] = 0;
                    continue;
                }
                const prev = matrix[i - 1][j - 1] - prices[j - 1];
                prevMax = Math.max(prevMax, prev);

                const best = Math.max(matrix[i][j - 1], prices[j] + prevMax);
                matrix[i][j] = best;
            }
        }
        return matrix[k][prices.length - 1];
    }
    
    const solutionB = () => {
        // didn't pass the time complexity
        if (prices.length < 2) return 0;
        
        const matrix = [[]];
        for (let i = 0; i < prices.length; i++) {
            matrix[0].push(0);    
        }
        
        for (let i = 1; i <= k; i++) {
            let prevMax = Number.MIN_SAFE_INTEGER;
            matrix[1] = [];
            for (let j = 0; j < prices.length; j++) {
                if (j === 0) {
                    matrix[1][j] = 0;
                    continue;
                }
                const prev = matrix[0][j - 1] - prices[j - 1];
                prevMax = Math.max(prevMax, prev);

                const best = Math.max(matrix[1][j - 1], prices[j] + prevMax);
                matrix[1][j] = best;
            }
            matrix.shift();
        }
        return matrix[0][prices.length - 1];
    }
    
    const solutionC = () => {
        if (prices.length < 2 || k === 0) return 0;
        if (k >= prices.length) k = prices.length - 1;
        
        const matrix = [[]];
        for (let i = 0; i < prices.length; i++) {
            matrix[0].push(0);    
        }
        
        for (let i = 1; i <= k; i++) {
            let prevMax = Number.MIN_SAFE_INTEGER;
            matrix[1] = [];
            for (let j = 0; j < prices.length; j++) {
                if (j === 0) {
                    matrix[1][j] = 0;
                    continue;
                }
                const prev = matrix[0][j - 1] - prices[j - 1];
                prevMax = Math.max(prevMax, prev);

                const best = Math.max(matrix[1][j - 1], prices[j] + prevMax);
                matrix[1][j] = best;
            }
            matrix.shift();
        }
        return matrix[0][prices.length - 1];
    }
    
    return solutionC();
};