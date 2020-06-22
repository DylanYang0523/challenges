/**
 * https://leetcode.com/problems/top-k-frequent-elements/
 * 347. Top K Frequent Elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const m = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curr = m.get(nums[i]);
        if (curr !== undefined) {
            m.set(nums[i], curr + 1);
        } else {
            m.set(nums[i], 1);
        }
    }
    
    const mArr = [...m];
    mArr.sort((a, b) => (b[1] - a[1]));
    
    const ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(mArr[i][0]);
    }
    
    return ans;
};