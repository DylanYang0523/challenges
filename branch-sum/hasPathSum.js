/**
 * https://leetcode.com/problems/path-sum/
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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
    if (!root) return false;
    let isValid = false;
    
    const check = (node, total) => {
        if (isValid) return;
        total += node.val;
        
        // case: leaf
        if (!node.left && !node.right) {
            if (total === sum) {
                isValid = true;
                return;
            }
            return;
        }
        
        // case: not leaf
        if (node.left) check(node.left, total);
        if (node.right) check(node.right, total);
    }
    
    check(root, 0);
    return isValid;
};