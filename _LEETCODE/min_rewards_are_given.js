/**
 * @lv 🔴
 * @link https://leetcode.com/problems/candy/
 * @name 135. Candy
 * @cate #editor_pick
 */
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const arr = Array(ratings.length).fill(1);
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i - 1]) {
            const tmp = arr[i - 1] + 1;
            arr[i] = Math.max(arr[i], tmp);
        }
    }
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            const tmp = arr[i + 1] + 1;
            arr[i] = Math.max(arr[i], tmp);
        }
    }
    let ans = 0;
    for (let i = 0; i < arr.length; i++) {
        ans += arr[i];
    }
    return ans;
};