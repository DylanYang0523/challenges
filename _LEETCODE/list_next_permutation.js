/**
 * @lv 🟡
 * @link https://leetcode.com/problems/next-permutation/
 * @name 31. Next Permutation
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // 1. a loop start from the end to check each number in the index n of the array is bigger then n - 1 index of the array,
    // 2. if (true) compare with the checked list to find out the smallest number which bigger then the arr[n - 1]
    // 3. else move to the next
    // 4. if no swap, return sorted arr
    
    const solutionA = () => {
        const swap = (idxA, idxB) => {
            const tmp = nums[idxA];
            nums[idxA] = nums[idxB];
            nums[idxB] = tmp;
        }

        const list = [];
        let swaped = false;

        label:
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i+1] !== undefined && nums[i] <= nums[i+1]) {
                // check
                let minIdx = undefined;
                let min = Number.MAX_SAFE_INTEGER;

                for (let j = list.length - 1; j >= 0; j--) {
                    if (list[j] > nums[i] && list[j] < min) {
                        min = list[j];
                        minIdx = j;
                    }
                }

                if (minIdx !== undefined) {
                    // replace list's num and swap nums arr
                    list[minIdx] = nums[i];
                    swap(i, nums.length - 1 - minIdx);

                    // sort the list and put into nums
                    list.sort((a, b) => (a - b));
                    for (let k = 0; k < list.length; k++) {
                        nums[i+1+k] = list[k];
                    }

                    swaped = true;
                    break label;
                }
            }
            list.push(nums[i]);
        }

        // no bigger permutation case
        if (!swaped) {
            nums.sort((a, b) => (a - b));
        }
    }
    
    
    const solutionB = () => {
        const swapNums = (a, b) => {
            const tmp = nums[a];
            nums[a] = nums[b];
            nums[b] = tmp;
        }
        
        const l = nums.length;
        let biggest = true;
        
        label:
        for (let i = l - 1; i >= 0; i--) {
            if (nums[i + 1] !== undefined &&
                nums[i] <= nums[i + 1]) {
                
                // find the min num which bigger than nums[i] and index is after i
                let idx = undefined;
                let min = Number.MAX_SAFE_INTEGER;
                for (let j = i + 1; j < l; j++) {
                    if (nums[j] > nums[i] && nums[j] < min) {
                        min = nums[j];
                        idx = j;
                    }
                }
                
                // if the target found
                if (idx !== undefined) {
                    swapNums(i, idx);
                    
                    // sort the rest of the nums
                    const rest = nums.slice(i + 1);
                    rest.sort((a, b) => (a - b));
                    for (let k = 0; k < rest.length; k++) {
                        nums[i + 1 + k] = rest[k];
                    }
                    
                    biggest = false;
                    break label;
                }
            }
        }
        
        if (biggest) {
            nums.sort((a, b) => (a - b));
        }
    }
    
    solutionB();
};