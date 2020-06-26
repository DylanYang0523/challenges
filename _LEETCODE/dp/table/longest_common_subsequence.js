/**
 * @lv 🟡
 * @link https://leetcode.com/problems/longest-common-subsequence/submissions/
 * @name 1143. Longest Common Subsequence
 * @cate #dp_table, #editor_pick
 */
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    const l1 = text1.length;
    const l2 = text2.length;
    
    const dp = [];
    for (let i = 0; i <= l1; i++) {
        dp.push([]);
        for (let j = 0; j <= l2; j++) {
            if (i === 0) {
                dp[i].push(0);
                continue;
            }
            if (j === 0) {
                dp[i].push(0);
                continue;
            }
            if (text1[i - 1] === text2[j - 1]) {    
                dp[i][j] = dp[i - 1][j - 1] + 1;
                continue;
            }
            const max = Math.max(dp[i][j - 1], dp[i - 1][j]);
            dp[i][j] = max;
        }
    }
    
    return dp[l1][l2];
};