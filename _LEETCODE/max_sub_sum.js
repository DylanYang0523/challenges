/**
 * @lv 🟢
 * @link https://leetcode.com/problems/maximum-subarray/
 * @name 53. Maximum Subarray 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    const solutionA = () => {
        let max = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < nums.length; i++) {
            let sum = nums[i];
            if (sum > max) max = sum;
            for (let j = i + 1; j < nums.length; j++) {
                sum += nums[j];
                if (sum > max) max = sum;
            }
        }
        return max;
    }
    
    const solutionB = () => {
        let max = nums[0], tmp = nums[0];
        
        for (let i = 1; i < nums.length; i++) {
            const cur = nums[i];
            tmp += cur;
            
            if (cur > tmp) {
                tmp = cur;
                if (tmp > max) {
                    max = tmp;
                }
            } else if (tmp > max) {
                max = tmp;
            }
        }
        
        return max;
    }
    
    const solutionC = () => {
        let max = Number.MIN_SAFE_INTEGER;
        let preSum = 0;

        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i];
            if (preSum <= 0) {
                preSum = curr;
            } else {
                preSum += curr;
            }
            max = Math.max(preSum, max);    
        }
        
        return max;    
    }
    
    return solutionC();
};