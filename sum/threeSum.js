/**
 * https://leetcode.com/problems/3sum/
 * 15. 3Sum
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if (!nums || nums.length < 1) return [];
    
    nums.sort((a, b) => (a - b));
    
    const len = nums.length;
    
    // those three lines can be ignored
    if (nums[0] === 0 && nums[1] === 0 && nums[2] === 0) return [[0,0,0]];
    if (nums[len-1] === 0 && nums[len-2] === 0 && nums[len-3] === 0) return [[0,0,0]];
    if (nums[0] >= 0 || nums[len - 1] <= 0) return [];
    
    const ans = [];
    for (let i = 0; i < len - 2; i++) {
        if (nums[i] > 0) break;
        if (nums[i] === nums[i-1]) continue;
        
        let j = i + 1, k = len - 1;
        while (j < k) {
            if (nums[i] + nums[j] + nums[k] === 0) {
                ans.push([nums[i], nums[j], nums[k]]);
                j += 1;
                k -= 1;
                while (nums[j] === nums[j-1]) {
                    j += 1;
                }
                while (nums[k] === nums[k+1]) {
                    k -= 1;
                }
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j += 1;
            } else {
                k -= 1;
            }
        }
    }
    
    return ans;
};