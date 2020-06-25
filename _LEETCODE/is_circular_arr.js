/**
 * @lv 🟡
 * @link https://leetcode.com/problems/circular-array-loop/
 * @name 457. Circular Array Loop
 * @cate #editor_pick, #memoize
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function(nums) {
    let failMap = {};
    let isValid = false;
    
    label:
    for (let i = 0; i < nums.length; i++) {
        if (failMap[i]) continue;
        if (nums[i] === 0) {
            failMap[i] = true;
            continue;
        }

        const currentMap = {};
        let current = i;
        
        while (true) {
            // failMap
            if (failMap[current]) {
                failMap = { ...failMap, ...currentMap };
                break;
            }
            
            // success
            if (currentMap[current]) {
                isValid = true;
                break label;
            }

            // record
            currentMap[current] = true;

            let nextIdx = current + nums[current];
            if (nextIdx >= nums.length) {
                nextIdx %= nums.length;
            } else if (nextIdx < 0) {
                nextIdx %= nums.length;
                nextIdx += nums.length;
                nextIdx %= nums.length;
            }

            // cycle length < 1
            if (nextIdx === current) {
                failMap = { ...failMap, ...currentMap };
                break;
            }

            // change direction
            if (nums[current] > 0 && nums[nextIdx] < 0 || nums[current] < 0 && nums[nextIdx] > 0) {
                failMap = { ...failMap, ...currentMap };
                break;
            }

            current = nextIdx;
        }
    }
    
    return isValid;
};