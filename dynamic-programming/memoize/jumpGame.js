/**
 * https://leetcode.com/problems/jump-game/submissions/
 * 55. Jump Game
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const solutionA = () => {
        if (nums.length === 1) return true;
    
        const queue = [0];
        const memo = {'0': true};
        const last = nums.length - 1;
        let ans = false;

        label:
        while (queue.length > 0) {
            const idx = queue.shift();
            for (let i = 1; i <= nums[idx]; i++) {
                const next = idx + i;
                if (next === last) {
                    ans = true;
                    break label;
                } else {
                    if (memo[next] === undefined) {
                        queue.push(next);
                        memo[next] = true;
                    }
                }
            }
        }

        return ans;
    }
    
    const solutionB = () => {
        let max = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i > max) return false;
            if (i + nums[i] >= nums.length - 1) return true;
            max = Math.max(max, i + nums[i]);
        }
    }
    
    return solutionB();
};