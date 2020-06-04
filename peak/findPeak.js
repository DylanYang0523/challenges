/**
 * https://leetcode.com/problems/find-peak-element/
 * 162. Find Peak Element
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    // 1. set left, right, mid
    // 2. use binary search
    if (!nums || nums.length < 1) return null;
    
    let left = 0,
        right = nums.length - 1;
    
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] < nums[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
};