/**
 * https://leetcode.com/problems/maximum-width-ramp/
 * 962. Maximum Width Ramp
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
    if (!A || A.length < 2) return 0;
    
    let max = Number.MIN_SAFE_INTEGER;
    
    for (let i = 0; i < A.length && (A.length -1 - i) > max; i++) {
        for (let j = A.length - 1; j >= 0 && (j - i) > max; j--) {
            if (A[i] <= A[j]) {
                const diff = j - i;
                if (diff > max) max = diff;
                break;
            }
        }
    }
    
    return max;
};