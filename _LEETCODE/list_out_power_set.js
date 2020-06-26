/**
 * @lv 🟡
 * @link https://leetcode.com/problems/subsets/
 * @name 78. Subsets
 * @cate #recursion
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    
    const solutionA = () => {
        const ans = [];
    
        const find = (curr, remain) => {
            for (let i = 0; i < remain.length; i++) {
                const target = remain[i];
                const newC = [...curr];
                newC.push(target);
                ans.push(newC);

                const newR = remain.slice(i + 1);
                if (newR.length > 0) {
                    find(newC, newR);
                }
            }
        }

        find([], nums);
        ans.push([]);

        return ans;
    }
    
    const solutionB = () => {
        const findSub = (arr) => {
            const currArr = [arr.shift()];
            let ans = [];
            if (arr.length > 0) {
                const sub = findSub(arr);
                for (let i = 0; i < sub.length; i++) {
                    ans.push(sub[i]);
                    ans.push(currArr.concat(sub[i]));
                }
            }
            ans.push(currArr);
            return ans;
        }
        return [[], ...findSub(nums)];
    }
    
    return solutionB();
};