/**
 * @lv 🟡
 * @link https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @name 215. Kth Largest Element in an Array
 * @cate #recursion, #editor_pick
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const solutionA = () => {
        if (nums.length < 1 || nums.length < k) return 0;
    
        nums.sort((a, b) => (a - b));
        const ans = nums[nums.length - k];

        return ans;   
    }
    
    const solutionB = () => {
        const swap = (idxA, idxB) => {
            const tmp = nums[idxA];
            nums[idxA] = nums[idxB];
            nums[idxB] = tmp;
        }
        
        const find = (arr, start, end) => {
            let pointer = start - 1;
            let pivot = arr[end];
            for (let i = start; i < end; i++) {
                if (arr[i] > pivot) {
                    pointer += 1;
                    if (i !== pointer) swap(i, pointer);
                }
            }
            pointer += 1;
            swap(end, pointer);
            if (pointer + 1 > k) {
                find(arr, start, pointer - 1);
            } else if (pointer + 1 < k) {
                find(arr, pointer + 1, end);   
            }
        }
        find(nums, 0, nums.length - 1);
        return nums[k - 1];
    }
    
    return solutionB();
};