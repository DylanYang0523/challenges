/**
 * @lv 🟡
 * @link https://leetcode.com/problems/longest-substring-without-repeating-characters/
 * @name 3. Longest Substring Without Repeating Characters
 * @cate #editor_pick
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const m = new Map();
    let max = Number.MIN_SAFE_INTEGER;
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        const prev = m.get(s[i]);
        if (prev !== undefined) {
            const l = i - start;
            max = Math.max(max, l);
            if (prev + 1 > start) {
                start = prev + 1;   
            }
            m.set(s[i], i);
        } else {
            m.set(s[i], i);
        }
    }
    max = Math.max(max, s.length - start);
    return max;
};