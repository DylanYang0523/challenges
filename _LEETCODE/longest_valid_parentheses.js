/**
 * @lv 🔴
 * @link https://leetcode.com/problems/longest-valid-parentheses/
 * @name 32. Longest Valid Parentheses
 * @cate #editor_pick
 */
/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
  const stack = [];
  const map = new Map();
  let max = 0;
  for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
          stack.push(s[i]);
          continue;
      }
      if (stack.length !== 0) {
          stack.pop();
          const sLen = stack.length;
          const vA = map.get(sLen) || 0;
          const vB = map.get(sLen + 1) || 0;
          const newVA = vA + vB + 2;
          max = Math.max(max, newVA);
          map.set(sLen, newVA);
          map.set((sLen + 1), 0);
      } else if (map.size !== 0) {
          map.clear();
      }
  }
  return max;
};