/**
 * https://leetcode.com/problems/largest-values-from-labels/
 * 1090. Largest Values From Labels
 * @param {number[]} values
 * @param {number[]} labels
 * @param {number} num_wanted
 * @param {number} use_limit
 * @return {number}
 */
var largestValsFromLabels = function(values, labels, num_wanted, use_limit) {
    const couple = [];
    for (let i = 0; i < values.length; i++) {
        // couple.push([values[i], labels[i]]);
        couple[i] = [values[i], labels[i]];
    }
    
    couple.sort((a, b) => (b[0] - a[0]));
    
    const map = {};
    let ans = 0;
    let count = 0;
    
    for (let i = 0; i < couple.length && count < num_wanted; i++) {
        const limit = map[couple[i][1]];
        if (limit === undefined) {
            map[couple[i][1]] = 1;
            ans += couple[i][0];
            count += 1;
        } else {
            if (limit < use_limit) {
                map[couple[i][1]] += 1;
                ans += couple[i][0];
                count += 1;
            }
        }
    }
    
    return ans;
};