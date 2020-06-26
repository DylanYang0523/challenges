/**
 * @lv 🟢
 * @link https://leetcode.com/problems/monotonic-array/
 * @name 896. Monotonic Array
 */
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    if (!A || A.length < 1) return false;
    if (A.length === 1) return true;
    
    // 1 increasing, 0 decreasing
    let direction;
    let isValid = true;
    for (let i = 1; i < A.length; i++) {
        const diff = A[i] - A[i-1];
        if (direction === undefined) {
            if (diff > 0) {
                direction = 1;
            } else if (diff < 0) {
                direction = 0;
            } else {}
        } else if (direction === 1) {
            if (diff >= 0) continue;
            isValid = false;
            break;
        } else {
            if (diff <= 0) continue;
            isValid = false;
            break;
        }
    }
    
    return isValid;
};