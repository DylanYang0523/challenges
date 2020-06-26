/**
 * @lv 🔴
 * @link https://leetcode.com/problems/longest-consecutive-sequence/submissions/
 * @name 128. Longest Consecutive Sequence
 * @cate #editor_pick, #memoize
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if (!nums || nums.length < 1) return 0;
    
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = true;
    }
    
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) continue;
        map[nums[i]] = false;
        
        let curr = 1;
        let pointerL = nums[i];
        while (map[pointerL - 1]) {
            map[pointerL - 1] = false;
            pointerL -= 1;
            curr += 1;
        }
        
        let pointerR = nums[i];
        while (map[pointerR + 1]) {
            map[pointerR + 1] = false;
            pointerR += 1;
            curr += 1;
        }
        
        max = Math.max(max, curr);
    }
    
    return max;
};