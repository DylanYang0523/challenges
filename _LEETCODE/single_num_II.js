/**
 * @lv 🟡
 * @link https://leetcode.com/problems/single-number-ii/
 * @name 137. Single Number II
 * @cate #to_be_optimized
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curr = m.get(nums[i]);
        if (!curr) {
            m.set(nums[i], 1);
        } else {
            m.set(nums[i], curr + 1);
        }
    }
    let ans = null;
    for (let [k, v] of m) {
        if (v !== 3) {
            ans = k;
            break;
        }
    }
    return ans;
};