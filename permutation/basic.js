/**
 * https://leetcode.com/problems/permutations/
 * 46. Permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const ans = [];
    const recursion = (curr, remain) => {
        if (remain.length > 0) {
            for (let i = 0; i < remain.length; i++) {
                const nextRemain = [...remain];
                const tar = nextRemain.splice(i, 1);
                const nextCur = [...curr];
                nextCur.push(tar);
                recursion(nextCur, nextRemain);
            }
        } else {
            ans.push(curr);
        }
    }
    recursion([], nums);
    return ans;
};