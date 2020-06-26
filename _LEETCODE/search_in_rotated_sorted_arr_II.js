/**
 * @lv 🟡
 * @link https://leetcode.com/problems/search-in-rotated-sorted-array-ii/submissions/
 * @name 81. Search in Rotated Sorted Array II
 * @cate #editor_pick
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = false;
    while (end >= start) {
        while (nums[start] === nums[start + 1]) {
            start += 1;
        }
        while (nums[end] === nums[end - 1]) {
            end -= 1;
        }
        const mid = Math.floor((start + end) / 2);
        if (nums[mid] === target) {
            ans = true;
            break;
        }
        if (target > nums[mid] &&
            target > nums[end] &&
            nums[start] >= nums[mid]) {
            end = mid - 1;
        } else if (target < nums[mid] &&
                   target < nums[start] &&
                   nums[end] <= nums[mid]) {
            start = mid + 1;
        } else {
            if (target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
    }
    return ans;
};