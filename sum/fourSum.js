/**
 * https://leetcode.com/problems/4sum/submissions/
 * 18. 4Sum
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => (a - b));
    
    const findDiff = (idx, direction) => {
        let goal = idx + direction;
        while (nums[goal] !== undefined && 
               nums[idx] === nums[goal]) {
            goal += direction;
        }
        return goal;
    }
    
    const ans = [];
    for (let i = 0; i < nums.length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        const sum3 = target - nums[i];
        for (let j = i + 1; j < nums.length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            const sum2 = sum3 - nums[j];
            let pointerA = j + 1;
            let pointerB = nums.length - 1;
            while (pointerA < pointerB) {
                const sumP = nums[pointerA] + nums[pointerB];
                if (sumP === sum2) {
                    ans.push([nums[i], nums[j], nums[pointerA], nums[pointerB]]);
                    pointerA = findDiff(pointerA, 1);
                } else if (sumP < sum2) {
                    pointerA = findDiff(pointerA, 1);
                } else {
                    pointerB = findDiff(pointerB, -1);
                }
            }
        }
    }
    
    return ans;
};