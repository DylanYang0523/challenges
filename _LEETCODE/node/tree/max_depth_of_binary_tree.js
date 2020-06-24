/**
 * @lv 🟢
 * @link https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * @name 104. Maximum Depth of Binary Tree
 * @cate #node, #tree, #recursion
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) return 0;
    
    let max = Number.MIN_SAFE_INTEGER;
    
    const findMaxDepth = (node, depth) => {
        if (!node.left && !node.right) {
            if (depth > max) {
                max = depth;
                return;
            }
        }
        if (node.left) findMaxDepth(node.left, depth + 1);
        if (node.right) findMaxDepth(node.right, depth + 1);
    }
    
    findMaxDepth(root, 1);
    
    return max;
};