/**
 * @lv 🟢
 * @link https://leetcode.com/problems/maximum-product-of-three-numbers/
 * @name 628. Maximum Product of Three Numbers
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length < 3) return 0;
    
    const maxArr = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    const minArr = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > maxArr[2]) {
            maxArr.push(nums[i]);
            maxArr.shift();
        } else if (nums[i] > maxArr[1]) {
            maxArr[0] = maxArr[1];
            maxArr[1] = nums[i];
        } else if (nums[i] > maxArr[0]) {
            maxArr[0] = nums[i];
        } else {}
        
        if (nums[i] < minArr[2]) {
            minArr.push(nums[i]);
            minArr.shift();
        } else if (nums[i] < minArr[1]) {
            minArr[0] = minArr[1];
            minArr[1] = nums[i];
        } else if (nums[i] < minArr[0]) {
            minArr[0] = nums[i];
        } else {}
    }
    
    const getAns = () => {
        const positive = maxArr[2] * maxArr[1] * maxArr[0];
        const negative = maxArr[2] * minArr[2] * minArr[1];
        const result = positive > negative ? positive : negative;
        return result;
    }
    
    const ans = getAns();
    
    return ans;
};