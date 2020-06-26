/**
 * @lv 🔴
 * @link https://leetcode.com/problems/edit-distance/
 * @name 72. Edit Distance
 * @cate #db_table, #editor_pick
 */
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    const metrix = [];
    
    for (let i = 0; i < word2.length + 1; i++) {
        metrix.push([]);
        for (let j = 0; j < word1.length + 1; j++) {
            if (i === 0) {
                metrix[i][j] = j;
                continue;
            }
            if (j === 0) {
                metrix[i][j] = i;
                continue;
            }
            if (word2[i-1] === word1[j-1]) {
                metrix[i][j] = metrix[i-1][j-1];
            } else {
                const case1 = metrix[i-1][j-1];
                const case2 = metrix[i-1][j];
                const case3 = metrix[i][j-1];
                metrix[i][j] = Math.min(case1, case2, case3) + 1;
            }
        }
    }
    
    return metrix[word2.length][word1.length];
};