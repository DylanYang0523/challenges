/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * 215. Kth Largest Element in an Array
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    if (nums.length < 1 || nums.length < k) return 0;
    
    nums.sort((a, b) => (a - b));
    const ans = nums[nums.length - k];
    
    return ans;
};