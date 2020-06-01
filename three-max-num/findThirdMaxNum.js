/**
 * https://leetcode.com/problems/third-maximum-number/
 * 414. Third Maximum Number
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    if (nums.length < 3) return null;
    const ansArr = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > ansArr[2]) {
            ansArr.push(nums[i]);
            ansArr.shift();
        } else if (nums[i] > ansArr[1]) {
            ansArr[0] = ansArr[1];
            ansArr[1] = nums[i];
        } else if (nums[i] > ansArr[0]) {
            ansArr[0] = nums[i];
        } else {
            continue;
        }
    }
    return ansArr[0] || ansArr[1] || ansArr[2];
};