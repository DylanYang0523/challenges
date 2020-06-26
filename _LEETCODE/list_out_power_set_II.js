/**
 * @lv 🟡
 * @link https://leetcode.com/problems/subsets-ii/
 * @name 90. Subsets II
 * @cate #editor_pick, #recursion
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    const solutionA = () => {
        const ans = [];
        const map = {};
        const getSub = (prev, remain) => {
            for (let i = 0; i < remain.length; i++) {
                const curr = remain.slice(i, i + 1);
                const next = remain.slice(i + 1);
                let newP = [...prev];
                newP = newP.concat(curr);
                newP.sort((a, b) => (a - b));

                const pKey = newP.join('');
                if (map[pKey]) continue;

                map[pKey] = true;
                ans.push(newP);
                getSub(newP, next);
            }
        }
        getSub([], nums);
        ans.push([]);
        return ans;
    }
    
    const solutionB = () => {
        nums.sort((a, b) => (a - b));
        const ans = [];
        const getSub = (prev, remain) => {
            ans.push(prev);
            for (let i = 0; i < remain.length; i++) {
                if (remain[i] === remain[i - 1]) continue;
                getSub([...prev, remain[i]], remain.slice(i + 1));
            }
        }
        getSub([], nums);
        return ans;
    }
    
    return solutionB();
};
