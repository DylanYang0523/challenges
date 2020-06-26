/**
 * @lv 🔴
 * @link https://leetcode.com/problems/ones-and-zeroes/
 * @name 474. Ones and Zeroes
 * @cate #to_be_sanitized, #to_be_optimized, #memoize
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
    const countStrs = [];
    const map = {};
    let maxCount = 0;
    
    // convert to 0, 1 counts
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let z = 0;
        let o = 0;
        for (let j = 0; j < str.length; j++) {
            if (str[j] === '0') {
                z += 1;
            } else {
                o += 1;
            }
        }
        countStrs.push([z,o]);
    }
    
    // knapsack recursion
    const knapsack = (index, count, rm, rn) => {
        if (count > maxCount) maxCount = count;
        if (index >= countStrs.length || (rm === 0 && rn === 0)) return;
        if (countStrs.length - index + count <= maxCount) return;

        const key = index + '' + count + '' + rm + '' + rn;
        if (map[key]) return;
        map[key] = true;
        
        // do not put this one
        knapsack(index + 1, count, rm, rn);
        
        // put this one
        if (rm >= countStrs[index][0] && rn >= countStrs[index][1]) {
            knapsack(index + 1, count + 1, rm - countStrs[index][0], rn - countStrs[index][1]);
        }
    }
    
    knapsack(0, 0, m, n);
    
    return maxCount;
};

const strs = ["011","1","11","0","010","1","10","1","1","0","0","0","01111","011","11","00","11","10","1","0","0","0","0","101","001110","1","0","1","0","0","10","00100","0","10","1","1","1","011","11","11","10","10","0000","01","1","10","0"], 
      m = 44, 
      n = 39;

const c = findMaxForm(strs, m, n);
console.log('c:', c)