/**
 * @lv 🔴
 * @link https://leetcode.com/problems/partition-to-k-equal-sum-subsets/
 * @name 698. Partition to K Equal Sum Subsets
 * @cate #editor_pick
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function(nums, k) {
    const solutionA = () => {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }

        if (sum % k !== 0) return false;
        const target = sum / k;

        // nums.sort((a, b) => (a - b));
        // if (nums[nums.length - 1] > target) return false;

        const used = Array(nums.length).fill(false);
        
        const find = (start, total, times) => {
            if (times === 1) return true;
            if (total === target) {
                return find(0, 0, times - 1);
            }
            for (let i = start; i < nums.length; i++) {
                if (!used[i]) {
                    used[i] = true;
                    if(find(i + 1, total + nums[i], times)) return true;
                    used[i] = false;
                }
            }
            return false;
        }

        return find(0, 0, k);
    }
    
    return solutionA();
};