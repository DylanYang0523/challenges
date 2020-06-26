/**
 * @lv 🟡
 * @link https://leetcode.com/problems/largest-number/
 * @name 179. Largest Number
 * @cate #editor_pick
 */
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const newNums = nums.map((num) => num.toString());
    
    newNums.sort((a, b) => {
        const aLen = a.length;
        const bLen = b.length;
        const maxLen = aLen + bLen;
        for (let i = 0; i < maxLen; i++) {
            if (a[i] === undefined) a = a.concat(a);
            if (b[i] === undefined) b = b.concat(b);
            if (a[i] > b[i]) {
                return -1;
            } else if (a[i] < b[i]) {
                return 1;
            } else {
                continue;
            }
        }
        return 0;
    });
    
    if (newNums[0] === '0') return '0';
    return newNums.join('');
};