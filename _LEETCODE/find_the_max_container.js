/**
 * @lv 🟢
 * @link https://leetcode.com/problems/container-with-most-water/
 * @name 11. Container With Most Water
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let pointerA = 0;
    let pointerB = height.length - 1;
    let max = Number.MIN_SAFE_INTEGER;
    while (pointerA < pointerB) {
        const h = Math.min(height[pointerA], height[pointerB]);
        const w = pointerB - pointerA;
        const area = h * w;
        max = Math.max(area, max);
        if (height[pointerA] === h) {
            pointerA += 1;
        } else {
            pointerB -= 1;
        }
    }
    return max;
};