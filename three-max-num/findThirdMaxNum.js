/**
 * https://leetcode.com/problems/third-maximum-number/
 * 414. Third Maximum Number
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 1) return null;
    
    const ansArr = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER];
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > ansArr[2]) {
            ansArr.push(nums[i]);
            ansArr.shift();
        } else if (nums[i] > ansArr[1] && nums[i] !== ansArr[2]) {
            ansArr[0] = ansArr[1];
            ansArr[1] = nums[i];
        } else if (nums[i] > ansArr[0] && nums[i] !== ansArr[2] && nums[i] !== ansArr[1]) {
            ansArr[0] = nums[i];
        } else {
            continue;
        }
    }
    
    const getAns = () => {
        if (ansArr[0] !== Number.MIN_SAFE_INTEGER) return ansArr[0];
        return ansArr[2];
    }
    
    const ans = getAns();
    
    return ans;
};