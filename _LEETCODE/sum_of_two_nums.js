/**
 * @lv 🟢
 * @link https://leetcode.com/problems/two-sum/
 * @name 1. Two Sum
 * @cate #classic
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const solutionA = (nums, target) => {
        for(let i = 0; i < nums.length - 1; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                if ((nums[i] + nums[j]) === target) {
                    return [i, j];
                }
            }
        }
    }
    
    const solutionB = (nums, target) => {
        const map = {};
        for(let i = 0; i < nums.length; i++) {
            const complement = target - nums[i];
            if(map[complement] !== undefined) {
                return [i, map[complement]];
            }
            map[nums[i]] = i;
        }
    }
    
    return solutionA(nums, target);
};