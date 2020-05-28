/**
 * https://leetcode.com/problems/path-sum-iii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
    if (!root) return 0;
    let count = 0;
    
    const possibleSumPath = (node, arr) => {
        for(let i = 0; i < arr.length; i++) {
            arr[i] += node.val;
            if (arr[i] === sum) count += 1;
        }
        if (node.val === sum) count += 1;
        arr.push(node.val);
        
        if (node.left) possibleSumPath(node.left, [...arr]);
        if (node.right) possibleSumPath(node.right, [...arr]);
    }
    
    possibleSumPath(root, [])
    
    return count;
};

// var pathSum = function(root, sum) {
//     let res = 0;
//     const helper = (root, sum) => {
//         if(!root) return;
//         sum -= root.val;
//         if(sum === 0){
//             res++;
//         }
//         helper(root.left, sum);
//         helper(root.right, sum);
//     }
//     const main = (root, sum) => {
//         if(!root) return 0;
//         helper(root, sum);
//         main(root.left, sum);
//         main(root.right, sum);
//         return ;
//     }
//     main(root, sum);
//     return res;
// };

// var pathSum = function (root, sum) {
//     const freq = { 0: 1 }
//     function dfs (root, currSum) {
//         if (!root) return 0
//         currSum += root.val
//         const oldSum = currSum - sum
//         let res = freq[oldSum] || 0
//         freq[currSum] = (freq[currSum] || 0) + 1
//         res += dfs(root.left, currSum) + dfs(root.right, currSum)
//         freq[currSum]--
//         return res
//     }
//     return dfs(root, 0)
// }

// var pathSum = function(root, sum, presums = { '0': 1 }, prev = 0) {
//     if (!root) return 0;
//     let curr = prev + root.val;
//     presums[curr] = (presums[curr] || 0) + 1;
//     let res = (presums[curr - sum] || 0) - !sum;
//     res += pathSum(root.left, sum, presums, curr) + pathSum(root.right, sum, presums, curr);
//     presums[curr]--;
//     return res;
// };