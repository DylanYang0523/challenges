/**
 * @lv 🔴
 * @link https://leetcode.com/problems/binary-tree-maximum-path-sum/
 * @name 124. Binary Tree Maximum Path Sum
 * @cate #tree, #node, #recursion, #editor_pick
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
var maxPathSum = function(root) {
    if (!root) return null;
    
    let max = Number.MIN_SAFE_INTEGER;
    const findM = (node) => {
        if (!node) return Number.MIN_SAFE_INTEGER;
        const l = findM(node.left);
        const r = findM(node.right);
        
        // path case
        const val = node.val;
        const pathM = Math.max(l + val + r, l + val, r + val, val);
        max = Math.max(max, pathM);
        
        // return case
        const currMax = Math.max(l + val, r + val, val);
        return currMax;
    }
    findM(root);
    return max;
};