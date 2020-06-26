/**
 * @lv 🟡
 * @link https://leetcode.com/problems/search-in-rotated-sorted-array/description/
 * @name 33. Search in Rotated Sorted Array
 * @cate #editor_pick
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0;
    let end = nums.length - 1;
    let ans = -1;
    while (end >= start) {
        const mid = Math.floor((end + start) / 2);
        if (nums[mid] === target) {
            ans = mid;
            break;
        }
        if (target > nums[mid] && 
            target > nums[end] && 
            nums[end] >= nums[mid]) {
            // go left
            end = mid - 1;
        } else if (target < nums[mid] && 
                   target < nums[start] && 
                   nums[start] <= nums[mid]) {
            // go right
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