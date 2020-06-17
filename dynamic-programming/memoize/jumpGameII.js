/**
 * https://leetcode.com/problems/jump-game-ii/
 * 45. Jump Game II
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // out of time limit
    const solutionA = () => {
        if (nums.length === 1) return 0;
        
        const last = nums.length - 1;
        const memo = {};
        memo[last] = 0;
        
        const find = (idx) => {
            let min = Number.MAX_SAFE_INTEGER;
            if (memo[idx] !== undefined) return memo[idx];
            for (let i = 1; i <= nums[idx] && idx + i <= last; i++) {
                let tmp;
                if (memo[idx + i] !== undefined) {
                    tmp = memo[idx + i] + 1;
                } else {
                    tmp = find(idx + i) + 1;
                }
                min = Math.min(min, tmp);
            }
            memo[idx] = min;
            return min;
        }
        
        return find(0);
    }
    
    const solutionB = () => {
        if (nums.length === 1) return 0;
        let max = Number.MIN_SAFE_INTEGER;
        let jumps = 0;
        let steps = 1;
        for (let i = 0; i < nums.length; i++) {
            steps -= 1;
            max = Math.max(nums[i] + i, max);
            if (max >= nums.length - 1) break;
            if (steps === 0) {
                steps = max - i;
                jumps += 1;
            }
        }
        return jumps + 1;
    }
    
    return solutionB();
};