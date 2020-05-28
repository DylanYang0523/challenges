/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    const solutionA = (s, t) => {
        if (s.length > t.length) return false;

        let sPointer = 0;
        for (let i = 0; i < t.length; i++) {
            if (sPointer >= s.length) break;
            if (t[i] === s[sPointer]) {
                sPointer += 1;
            }
        }
        
        return sPointer >= s.length;
    }
    
    return solutionA(s,t);
};