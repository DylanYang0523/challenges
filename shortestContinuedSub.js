/**
 * https://leetcode.com/problems/shortest-unsorted-continuous-subarray/
 * 581. Shortest Unsorted Continuous Subarray
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const solutionA = () => {
        const ori = [...nums];
        nums.sort((a, b) => (a - b));
        let count = 0;
        let i = 0, j = nums.length - 1;
        while (i < j) {
            if (ori[i] === nums[i]) i++;
            if (ori[j] === nums[j]) j--;
            if (ori[i] !== nums[i] &&
                ori[j] !== nums[j]) {
                count = j - i + 1;
                break;
            }
        }
        return count;    
    }
    
    const solutionB = () => {
        let max = Number.MIN_SAFE_INTEGER;
        let min = Number.MAX_SAFE_INTEGER;
        let l = 0;
        let r = nums.length - 1;
        let end = 0, start = 1;
        while (l < nums.length) {
            nums[l] >= max ? max = nums[l] : end = l;
            nums[r] <= min ? min = nums[r] : start = r;
            l++;
            r--;
        }
        return end - start + 1;
    }
    
    return solutionB();
};