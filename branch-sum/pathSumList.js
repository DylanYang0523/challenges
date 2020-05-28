/**
 * https://leetcode.com/problems/path-sum-ii/
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
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    const result = [];
    
    const findSumPath = (node, total, nodePath) => {
        total += node.val;
        nodePath.push(node.val);
        
        if (!node.left && !node.right) {
            if (sum === total) {
                result.push(nodePath);
            }
        }
        
        if (node.left) findSumPath(node.left, total, [...nodePath]);
        if (node.right) findSumPath(node.right, total, [...nodePath]);
    }
    
    findSumPath(root, 0, []);
    return result;
};