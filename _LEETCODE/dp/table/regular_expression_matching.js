/**
 * @lv 🔴
 * @link https://leetcode.com/problems/regular-expression-matching/
 * @name 10. Regular Expression Matching
 * @cate #dp_table, #editor_pick
 */
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const dp = [];
    for (let i = 0; i < p.length + 1; i++) {
        dp.push([]);
        for (let j = 0; j < s.length + 1; j++) {
            if (i === 0 && j === 0) {
                dp[i][j] = true;
                continue;
            }
            if (i === 0) {
                dp[i][j] = false;
                continue;
            }
            if (p[i - 1] === s[j - 1] || p[i - 1] === '.') {
                const ref = (dp[i - 1] && dp[i - 1][j - 1]) || false;
                dp[i][j] = ref;
            } else {
                if (p[i - 1] === '*') {
                    if (p[i - 2] === s[j - 1] || p[i - 2] === '.') {
                        const refA = dp[i][j - 1];
                        const refB = dp[i - 2] && dp[i - 2][j - 1];
                        const refC = dp[i - 2] && dp[i - 2][j];
                        dp[i][j] = refA || refB || refC;
                        // if * can be the first char of the p
                        // if (dp[i][j] === undefined) dp[i][j] = true;
                    } else {
                        const ref = dp[i - 2] && dp[i - 2][j];
                        dp[i][j] = ref || false;
                    }
                } else {
                    dp[i][j] = false;
                }
            }
        }
    }
    return dp[p.length][s.length];
};