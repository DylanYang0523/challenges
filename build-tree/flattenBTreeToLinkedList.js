/**
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * 114. Flatten Binary Tree to Linked List
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) return;
        
    const queue = [];
    
    const treeToLinear = (node) => {
        if (node.right) queue.unshift(node.right);
        if (node.left) {
            node.right = node.left;
            node.left = null;
            treeToLinear(node.right);
        } else {
            if (queue.length > 0) {
                node.right = queue.shift();
                treeToLinear(node.right);
            }
        }
    }
    
    treeToLinear(root);
    
    return root;
};