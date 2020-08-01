/**
 * @lv 🔴
 * @link https://leetcode.com/problems/find-the-duplicate-number/
 * @name 287. Find the Duplicate Number
 * @cate #editor_pick
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  let t = nums[0];
  let h = nums[0];
  while (true) {
    t = nums[t];
    h = nums[nums[h]];
    if (t === h) break;
  }
  let p1 = nums[0];
  let p2 = t;
  while (p1 !== p2) {
    p1 = nums[p1];
    p2 = nums[p2];
  }
  return p1;
};
