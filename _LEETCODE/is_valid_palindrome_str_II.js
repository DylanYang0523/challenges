/**
 * https://leetcode.com/problems/valid-palindrome-ii/
 * 680. Valid Palindrome II
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
    let miss = 0;
    let pointerA = 0;
    let pointerB = s.length - 1;
    let isValid = true;
    let diffIdxA, diffIdxB;
    
    while (pointerB > pointerA) {
        if (s[pointerA] === s[pointerB]) {
            pointerA += 1;
            pointerB -= 1;
            continue;
        } else {
            // already tried both side, so break the loop directly
            if (miss === 2) {
                isValid = false;
                break;
            }
            if (!diffIdxA && !diffIdxB) {
                miss += 1;
                diffIdxA = pointerA;
                diffIdxB = pointerB;
                pointerA += 1;
                continue;
            } else {
                miss += 1;
                pointerA = diffIdxA;
                pointerB = diffIdxB;
                pointerB -= 1;
                continue;
            }
        }
    }
    
    return isValid;
};