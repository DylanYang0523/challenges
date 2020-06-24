/**
 * @lv 🟡
 * @link https://leetcode.com/problems/number-of-islands/
 * @name 200. Number of Islands
 * @cate #recursion, #array, #editor_pick
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || grid.length < 1) return 0;
    
    // 1. go through matrix
    // 2. if find a land, then count plus one ann also explore it, set all explored land as undefined
    
    const iBoundry = grid.length;
    const jBoundry = grid[0].length;
    const checkBoundry = (i, j) => {
        if (i < iBoundry && 
            i >= 0 &&
            j < jBoundry &&
            j >= 0
           ) return true;
        return false;
    }
    
    const explore = (i, j) => {
        // right
        if (checkBoundry(i, j + 1) && grid[i][j + 1] === '1') {
            grid[i][j + 1] = undefined;
            explore(i, j + 1);
        }
        // left
        if (checkBoundry(i, j - 1) && grid[i][j - 1] === '1') {
            grid[i][j - 1] = undefined;
            explore(i, j - 1);
        }
        // top
        if (checkBoundry(i - 1, j) && grid[i - 1][j] === '1') {
            grid[i - 1][j] = undefined;
            explore(i - 1, j);
        }
        // down
        if (checkBoundry(i + 1, j) && grid[i + 1][j] === '1') {
            grid[i + 1][j] = undefined;
            explore(i + 1, j);
        }
    }
    
    let landCount = 0;
    for (let i = 0; i < iBoundry; i++) {
        for (let j = 0; j < jBoundry; j++) {
            if (grid[i][j] === undefined || grid[i][j] === '0') continue;
            landCount += 1;
            explore(i, j);
        }
    }
    
    return landCount;
};