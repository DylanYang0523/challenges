/**
 * @lv 🟢
 * @link https://leetcode.com/problems/minimum-absolute-difference/
 * @name 1200. Minimum Absolute Difference
 */
/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function(arr) {
    if (!arr || arr.length < 2) return null;
    
    arr.sort((a, b) => (a - b));
    
    let ans = [];
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = arr[i+1] - arr[i];
        if (diff === min) {
            ans.push([arr[i], arr[i+1]]);
        } else if (diff < min) {
            min = diff;
            ans = [[arr[i], arr[i+1]]];
        } else {
            continue;
        }
    }
    
    return ans;
};