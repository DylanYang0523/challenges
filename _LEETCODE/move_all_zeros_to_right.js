/**
 * @lv 🟢
 * @link https://leetcode.com/problems/move-zeroes/
 * @name 283. Move Zeroes
 */
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    const solutionA = () => {
        nums.sort((a, b) => {
            if (b !== 0) return 1;
            return -1;
        });   
    }
    
    const solutionB = () => {
        let i = 0;
        let count = 0;
        while (i !== nums.length) {
            if (nums[i] === 0) {
                nums.splice(i, 1);
                count += 1;
            } else {
                i += 1;
            }
        }

        for (let j = 0; j < count; j++) {
            nums.push(0);
        }
    }
    
    solutionA();
    return nums;
};