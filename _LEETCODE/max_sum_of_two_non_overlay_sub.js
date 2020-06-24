/**
 * @lv 🟡
 * @link https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/
 * @name 1031. Maximum Sum of Two Non-Overlapping Subarrays
 */
/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
    if (!A || A.length < 1) return null;
    
    const arrL = [];
    for (let i = 0; i < A.length - L + 1; i++) {
        let sum = 0;
        for (let j = 0; j < L; j++) {
            sum += A[i+j]
        }
        arrL.push(sum);
    }
    
    const arrM = [];
    for (let i = 0; i < A.length - M + 1; i++) {
        let sum = 0;
        for (let j = 0; j < M; j++) {
            sum += A[i+j]
        }
        arrM.push(sum);
    }
    
    let max = 0;
    for (let i = 0; i < arrL.length; i++) {
        for (let j = 0; j < arrM.length; j++) {
            if (j > i - M && j <= i + L) continue;
            const sum = arrL[i] + arrM[j];
            if (sum > max) max = sum;
        }
    }
    
    return max;
};