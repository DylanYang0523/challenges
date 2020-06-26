/**
 * @lv 🟡
 * @link https://leetcode.com/problems/group-anagrams/
 * @name 49. Group Anagrams
 * @cate #to_be_optimized
 */
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = {};
    
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        let key = str.split('');
        
        key.sort();
        key = key.join('');
        
        if (map[key]) {
            map[key].push(str);
        } else {
            map[key] = [str];
        }
    }
    
    return Object.values(map);
};