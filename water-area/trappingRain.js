/**
 * https://leetcode.com/problems/trapping-rain-water/
 * 42. Trapping Rain Water
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const findMaxIdx = (start, end) => {
        if (start >= end) return undefined;
        let max = Number.MIN_SAFE_INTEGER;
        let maxIdx = undefined;
        for (let i = start; i <= end; i++) {
            if (height[i] > max) {
                max = height[i];
                maxIdx = i;
            }
        }
        return maxIdx;
    }
    
    const calculate = (idxA, idxB) => {
        const min = Math.min(height[idxA], height[idxB]);
        const width = Math.abs(idxA - idxB) + 1; 
        const total = min * width;
        let land = 0;
        for (let i = idxA; i <= idxB; i++) {
            if (height[i] > min) {
                land += min;
            } else {
                land += height[i];
            }
        }
        return total - land;
    }
    
    let waterArea = 0;
    const findWater = (maxIdx, right, left) => {
        let idxL, idxR;
        if (left) idxL = findMaxIdx(0, maxIdx - 1);
        if (right) idxR = findMaxIdx(maxIdx + 1, height.length - 1);
        if (idxL !== undefined) {
            waterArea += calculate(idxL, maxIdx);
            findWater(idxL, false, true);
        }
        if (idxR !== undefined) {
            waterArea += calculate(maxIdx, idxR);
            findWater(idxR, true, false);
        }
    }
    
    const maxIdx = findMaxIdx(0, height.length - 1);
    findWater(maxIdx, true, true);
    
    return waterArea;
};