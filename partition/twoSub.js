/**
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * 416. Partition Equal Subset Sum
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    const solutionA = () => {
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i];
        }
        if (sum % 2 !== 0) return false;

        const subSum = sum / 2;
        nums.sort((a, b) => (a - b));

        const last = nums[nums.length - 1];
        if (last > subSum) return false;

        const target = subSum - last;
        if (target === 0) return true;
        nums.pop();

        let memo = new Map();
        let found = false;

        const find = (t, a) => {
            const key = a.join('') + '_' + t;
            if (memo.get(key)) return;
            memo.set(key, true);

            if (found) return;
            for (let i = 0; i < a.length; i++) {
                if (found) break;
                const newT = t - a[i];
                if (newT === 0) {
                    found = true;
                    break;
                }
                if (newT > 0) {
                    const newA = [...a];
                    newA.splice(i, 1);
                    find(newT, newA);
                } else {
                    break;
                }
            }
        }
        find(target, nums);

        return found;
    }
    
    return solutionA();
};