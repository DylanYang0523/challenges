/**
 * https://leetcode.com/problems/minimum-time-difference/
 * 539. Minimum Time Difference
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    timePoints = timePoints.map((time) => {
        const arr = time.split(':');
        const h = Number(arr[0]) * 60;
        const m = Number(arr[1]);
        return h + m;
    });
    
    timePoints.sort((a, b) => (a - b));
    
    const len = timePoints.length;
    let min = Number.MAX_SAFE_INTEGER;
    
    for (let i = 0; i < len - 1; i++) {
        if (timePoints[i + 1] === undefined) break;
        const diff = timePoints[i + 1] - timePoints[i];
        if (diff < min) min = diff;
    }
    
    if (timePoints[len - 1] >= 720 &&
        timePoints[0] < 720) {
        const diff = timePoints[0] - (timePoints[len - 1] - 1440);
        if (diff < min) min = diff;
    }
    
    return min;
};