/**
 * https://leetcode.com/problems/binary-search/
 * 704. Binary Search
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length < 1 || 
        target > nums[nums.length - 1] || 
        target < nums[0]) return -1;
    
    let ans = -1;
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const pivot = Math.floor(end - start / 2);
        if (nums[pivot] === target) {
            ans = pivot;
            break;
        } else if (nums[pivot] < target) {
            start = pivot + 1;
        } else {
            end = pivot - 1;
        }
    }
    
    return ans;
};