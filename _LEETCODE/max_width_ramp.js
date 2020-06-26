/**
 * @lv 🟡
 * @link https://leetcode.com/problems/maximum-width-ramp/
 * @name 962. Maximum Width Ramp
 * @cate #editor_pick, #to_be_optimized
 */
/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
    const solutionA = () => {
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
    }
    const solutionB = () => {
        const map = new Map();
        for (let i = 0; i < A.length; i++) {
            const curr = map.get(A[i]);
            if (curr === undefined) {
                map.set(A[i], [i]);
            } else {
                map.set(A[i], [...curr, i]);
            }
        }
        let newM = new Map([...map].sort((a, b) => (a[0] - b[0])));
        let max = 0;
        let minIdx = Number.MAX_SAFE_INTEGER;
        for (let [k, v] of newM) {
            minIdx = Math.min(v[0], minIdx);
            max = Math.max(v[v.length - 1] - minIdx, max);
        }
        return max;
    }
    return solutionB();
};

