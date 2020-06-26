/**
 * @lv 🔴
 * @link https://leetcode.com/problems/interleaving-string/
 * @name 97. Interleaving String
 * @cate #dp_table, #editor_pick
 */
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function(s1, s2, s3) {
    const solutionA = () => {
        let l1 = s1.length;
        let l2 = s2.length;
        
        if (l1 + l2 !== s3.length) return false;
        
        const m = [];
        for (let i = 0; i <= l1; i++) {
            const currI = i === 0 ? '' : s1[i - 1];
            m[i] = [];
            for (let j = 0; j <= l2; j++) {
                const currJ = j === 0 ? '' : s2[j - 1];
                const target = s3[i + j - 1];
                if (target === undefined) {
                    m[i].push(true);
                    continue;
                }
                if (currJ === target && 
                    currI === target) {
                    m[i].push(m[i - 1][j] || m[i][j - 1]);
                } else if (currJ === target) {
                    m[i].push(m[i][j - 1]);
                } else if (currI === target) {
                    m[i].push(m[i - 1][j]);
                } else {
                    m[i].push(false);
                }
            }
        }
        
        return m[l1][l2];
    }
    
    const solutionB = () => {
        // didn't pass the time limit
        const memo = {};
    
        const canWeave = (a1, a2, remain) => {
            const key = a1 + '_' + a2 + '_' + remain;
            if (memo[key]) return memo[key];
            let result = undefined;

            if (remain.length === 0) {
                if (a1.length === 0 && a2.length === 0) {
                    result = true;
                    memo[key] = result;
                    return result;
                }
                result = false;
                memo[key] = false;
                return result;
            }

            if (a1.length === 0) {
                if (a2 === remain) {
                    result = true;
                    memo[key] = result;
                    return result;
                } else {
                    result = false;
                    memo[key] = false;
                    return result;
                }
            }

            if (a2.length === 0) {
                if (a1 === remain) {
                    result = true;
                    memo[key] = result;
                    return result;
                } else {
                    result = false;
                    memo[key] = false;
                    return result;
                }
            }

            const curr = remain[0];
            const next = remain.slice(1);
            let can1 = false;
            let can2 = false;
            if (a1[0] === curr) {
                can1 = canWeave(a1.slice(1), a2, next);
            }
            if (a2[0] === curr) {
                can2 = canWeave(a1, a2.slice(1), next);
            }

            result = can1 || can2;
            memo[key] = result;
            return result;
        }

        return canWeave(s1, s2, s3);   
    }
    
    return solutionA();
};