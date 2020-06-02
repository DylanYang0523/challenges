/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * 5. Longest Palindromic Substring
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const solutionA = (s) => {
        if (s.length <= 1) return s;
        
        let max = Number.MIN_SAFE_INTEGER;
        let ansArr = [];
        s = s.split('');

        for(let i = 0; i < s.length; i++) {
            // check (i)'s left and right
            let pointerA = i;
            let pointerB = i;
            while (s[pointerA] && s[pointerB] && s[pointerA] === s[pointerB]) {
                if (2 * (pointerB - i) + 1 > max) {
                    max = 2 * (pointerB - i) + 1;
                    ansArr = s.slice(pointerA, pointerB + 1);
                }
                pointerA -= 1;
                pointerB += 1;
            }

            // check (i & i+1)'s left and right
            pointerA = i;
            pointerB = i + 1;
            while (s[pointerA] && s[pointerB] && s[pointerA] === s[pointerB]) {
                if (2 * (pointerB - i) > max) {
                    max = 2 * (pointerB - i);
                    ansArr = s.slice(pointerA, pointerB + 1);
                }
                pointerA -= 1;
                pointerB += 1;
            }
        }
        
        return ansArr.join('');
    }
    
    const solutionB = (s) => {
        if (s.length <= 1) return s;
    
        let max = Number.MIN_SAFE_INTEGER;
        let maxStr = '';

        for(let i = 0; i < s.length; i++) {
            // check (i)'s left and right
            let tempArr = [];
            let pointerA = i;
            let pointerB = i;
            while (s[pointerA] && s[pointerB] && s[pointerA] === s[pointerB]) {
                if (tempArr.length === 0) {
                    tempArr.push(s[pointerA]);
                } else {
                    tempArr.push(s[pointerB]);
                    tempArr.unshift(s[pointerA]);
                }
                if (tempArr.length > max) {
                    max = tempArr.length;
                    maxStr = tempArr.join('');
                }
                pointerA -= 1;
                pointerB += 1;
            }

            // check (i & i+1)'s left and right
            tempArr = [];
            pointerA = i;
            pointerB = i + 1;
            while (s[pointerA] && s[pointerB] && s[pointerA] === s[pointerB]) {
                tempArr.push(s[pointerB]);
                tempArr.unshift(s[pointerA]);
                if (tempArr.length > max) {
                    max = tempArr.length;
                    maxStr = tempArr.join('');
                }
                pointerA -= 1;
                pointerB += 1;
            }
        }
        
        return maxStr;
    }
    
    return solutionA(s);
};