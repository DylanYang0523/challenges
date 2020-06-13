/**
 * https://leetcode.com/problems/permutations-ii/submissions/
 * 47. Permutations II
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function(nums) {
    const ans = [];
    const find = (curr, remain) => {
        if (remain.length > 0) {
            const map = {};
            for (let i = 0; i < remain.length; i++) {
                const newRemain = [...remain];
                const s = newRemain.splice(i, 1);
                if (map[s]) {
                    continue;
                } else {
                    map[s] = true;   
                }
                const newCurr = [...curr];
                newCurr.push(s);
                find(newCurr, newRemain);
            }   
        } else {
            ans.push(curr);
        }
    }
    find([], nums);
    return ans;
};