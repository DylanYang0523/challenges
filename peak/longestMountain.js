/**
 * https://leetcode.com/problems/longest-mountain-in-array/
 * 845. Longest Mountain in Array
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function(A) {
    const solutionA = () => {
        if (!A || A.length < 3) return 0;
        let max = 0;
        let ascend = 0;
        let descend = 0;
        let count = 0;
        for (let i = 1; i < A.length; i++) {
            const prev = A[i-1];
            const current = A[i];
            if (current > prev) {
                if (descend === 1 && ascend === 1) {
                    if (count + 1 > max) max = count + 1;
                    count = 1;
                    descend = 0;
                } else if (ascend === 1 && descend === 0) {
                    count += 1;
                } else {
                    ascend = 1;
                    count += 1;
                }
            } else if (current < prev) {
                if (ascend === 1 && descend === 0) {
                    descend = 1;
                    count += 1;
                } else if (ascend === 1 && descend === 1) {
                    count += 1;
                } else {}
            } else {
                if (ascend === 1 && descend === 1) {
                    if (count + 1 > max) max = count + 1;
                    ascend = 0;
                    descend = 0;
                    count = 0;
                } else if (ascend === 1 && descend === 0) {
                    ascend = 0;
                    count = 0;
                } else {}
            }
        }
        if (ascend === 1 && descend === 1 && count + 1 > max) max = count + 1; 
        return max;
    }
    
    const solutionB = () => {
        if (!A || A.length < 3) return 0;
        const len = A.length;
        let pA = 0, 
            pB = 0,
            max = 0;
        
        while (pA < len) {
            if (pB < len &&
                A[pB+1] > A[pB]
               ) {
                while (pB < len && A[pB+1] > A[pB]) {
                    pB += 1;
                }
                if (A[pB+1] < A[pB]) {
                    while (pB < len && A[pB+1] < A[pB]) {
                        pB += 1;
                    }
                    const diff = pB - pA + 1;
                    if (diff > max) max = diff;
                }
            }
            if (pB > pA) {
                pA = pB;
            } else {
                pA += 1;
                pB = pA;
            }
        }
        
        return max;
    }
    
    return solutionB();
};