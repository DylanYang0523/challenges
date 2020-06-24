/**
 * @lv 🟡
 * @link https://leetcode.com/problems/word-search/
 * @name 79. Word Search
 * @cate #editor_pick
 */
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const h = board.length;
    const w = board[0].length;
    
    const checkBoundary = (i, j) => {
        if (i < 0 || i >= h ||
            j < 0 || j >= w) {
            return false;
        }
        return true;
    }
    
    const findWord = (pointer, currI, currJ) => {
        const target = word[pointer + 1];
        
        if (target === undefined) return true;
        let isFound = false;
        
        // IMPORTANT!!
        board[currI][currJ] = null;
        
        // top
        if (!isFound && checkBoundary(currI - 1, currJ)) {
            const nextI = currI - 1;
            const nextJ = currJ;
            if (board[nextI][nextJ] === target) {
                isFound = findWord(pointer + 1, nextI, nextJ);
            }
        }
        
        // right
        if (!isFound && checkBoundary(currI, currJ + 1)) {
            const nextI = currI;
            const nextJ = currJ + 1;
            if (board[nextI][nextJ] === target) {
                isFound = findWord(pointer + 1, nextI, nextJ);
            }
        }
        
        // down
        if (!isFound && checkBoundary(currI + 1, currJ)) {
            const nextI = currI + 1;
            const nextJ = currJ;
            if (board[nextI][nextJ] === target) {
                isFound = findWord(pointer + 1, nextI, nextJ);
            }
        }
        
        // left
        if (!isFound && checkBoundary(currI, currJ - 1)) {
            const nextI = currI;
            const nextJ = currJ - 1;
            if (board[nextI][nextJ] === target) {
                isFound = findWord(pointer + 1, nextI, nextJ);
            }
        }
        
        board[currI][currJ] = word[pointer];
        
        return isFound;
    }
    
    let success = false;
    label:
    for (let i = 0; i < h; i++) {
        for (let j = 0; j < w; j++) {
            if (board[i][j] === word[0]) {
                success = findWord(0, i, j);
                if (success) break label;
            }
        }
    }
    
    return success;
};