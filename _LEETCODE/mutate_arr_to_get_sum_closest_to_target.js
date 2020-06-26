/**
 * @lv 🟡
 * @link https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/
 * @name 1300. Sum of Mutated Array Closest to Target
 * @cate #recursion,#editor_pick
 */
/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var findBestValue = function(arr, target) {
    // 1. calculate Math.round(avg), if all nums >= avg, then return avg;
    // 2. target - min arr[idx], then dive 
    
    arr.sort((a, b) => (a - b));
    
    // need to handle if the absolute difference is same
    const calculateAvg = (target, sum, idx) => {
        const len = arr.length;
        const floatAvg = (target - sum) / (len - 1 - idx);
        const floorAvg = Math.floor(floatAvg);
        const diff = floatAvg - floorAvg;
        const avg = diff > 0.5 ? Math.ceil(floatAvg) : floorAvg;
        return avg;
    }   
    
    // init case
    const avg = calculateAvg(target, 0, -1);
    if (arr[0] >= avg) return avg;
    
    // normal case
    let sum = 0;
    let pointer = 0;
    let ans = arr[arr.length - 1];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i+1] && arr[i+1] === [arr[i]]) {
            sum += arr[i];
            continue;
        }
        sum += arr[i];
        const avg = calculateAvg(target, sum, i);
        
        if (arr[i+1] && arr[i+1] > avg) {
            ans = avg;
            break;
        }
    }
    
    return ans;
};