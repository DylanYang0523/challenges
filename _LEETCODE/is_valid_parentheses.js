/**
 * @lv 🟢
 * @link https://leetcode.com/problems/valid-parentheses/
 * @name 20. Valid Parentheses
 * @cate #editor_pick
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. convert s -> arr
    // 2. go through the arr and do comparison to see if it needs to put into the orphan arr
    // 3. if orphan is empty, then the input is the valid string
    
    const arr = s.split('');
    if (arr.length === 0) return true;
    if (arr.length % 2 !== 0) return false;
    
    const orphanArr = [];
    
    const charTable = {
        '}':'{',
        ']':'[',
        ')':'(',
    }
    
    for(let i = 0; i < arr.length; i++) {
        const pairValue = charTable[arr[i]];
        if (!pairValue) {
            orphanArr.push(arr[i]);
        } else {
            if (orphanArr[orphanArr.length - 1] !== pairValue) {
                orphanArr.push(arr[i]);
                break;
            }
            orphanArr.pop();
        }
    }
    
    return orphanArr.length === 0;
};