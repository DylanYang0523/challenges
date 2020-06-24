/**
 * @lv 🔴
 * @link https://leetcode.com/problems/word-search-ii/
 * @name 212. Word Search II
 * @cate #to_be_optimized
 */
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(board, words) {
    const h = board.length;
    const w = board[0].length;
    
    const find = (word) => {
        const check = (i, j, idx) => {
            const next = word[idx + 1];
            if (next === undefined) return true;
            
            let isValid = false;
            board[i][j] = null;
            
            // check left
            if (!isValid && 
                board[i][j - 1] === next) {
                isValid = check(i, j - 1, idx + 1);
            }
            
            // check right
            if (!isValid && 
                board[i][j + 1] === next) {
                isValid = check(i, j + 1, idx + 1);
            }
            
            // check top
            if (!isValid && 
                board[i - 1] !== undefined && 
                board[i - 1][j] === next) {
                isValid = check(i - 1, j, idx + 1);
            }
            
            // check down
            if (!isValid && 
                board[i + 1] !== undefined && 
                board[i + 1][j] === next) {
                isValid = check(i + 1, j, idx + 1);
            }
            
            board[i][j] = word[idx];
            return isValid;
        }

        for (let i = 0; i < h; i++) {
            for (let j = 0; j < w; j++) {
                if (board[i][j] === word[0]) {
                    const isValid = check(i, j, 0);
                    if (isValid) return isValid;
                }
            }
        }
        
        return false;
    }
    
    const ans = [];
    for (let i = 0; i < words.length; i++) {
        if (find(words[i])) {
            ans.push(words[i]);
        }
    }
    
    return ans;
};