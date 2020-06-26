/**
 * @lv 🟢
 * @link https://leetcode.com/problems/palindrome-number/
 * @name 9. Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;
    
    const xStr = x.toString();
    let pointerA = 0;
    let pointerB = xStr.length - 1;
    
    let isValid = true;
    while (pointerB > pointerA) {
        if (xStr[pointerA] === xStr[pointerB]) {
            pointerA += 1;
            pointerB -= 1;
        } else {
            isValid = false;
            break;
        }
    }
    
    return isValid;
};