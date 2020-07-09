/**
 * @lv 🟢
 * @link https://leetcode.com/problems/combination-sum/
 * @name 39. Combination Sum
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  const ans = [];
  const calc = (curr, goal, arr) => {
      if (curr > target) return;
      if (curr === target) {
          ans.push(goal);
          return;
      }
      for (let i = 0; i < arr.length; i++) {
          calc(curr + arr[i], [...goal, arr[i]], arr.slice(i));
      }
  }
  calc(0, [], candidates);
  return ans;
};