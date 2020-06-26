/**
 * @lv 🟢
 * @link https://leetcode.com/problems/valid-palindrome/
 * @name 125. Valid Palindrome
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const regexp = new RegExp(/\w/);
    
    let pointerA = 0;
    let pointerB = s.length - 1;
    let isValid = true;
    
    s = s.toUpperCase();
    
    while (pointerB > pointerA) {
        if (!regexp.test(s[pointerB])) {
            pointerB -= 1;
            continue;
        }
        if (!regexp.test(s[pointerA])) {
            pointerA += 1;
            continue;
        }
        if (s[pointerA] === s[pointerB]) {
            pointerA += 1;
            pointerB -= 1;
            continue;
        } else {
            isValid = false;
            break;
        }
    }
    
    return isValid;
};