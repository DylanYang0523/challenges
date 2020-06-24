/**
 * @lv 🟢
 * @link https://leetcode.com/problems/insert-into-a-binary-search-tree/
 * @name 701. Insert into a Binary Search Tree
 * @cate #tree, #node, #recursion
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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function(root, val) {
    if (!root) return new TreeNode(val, null, null);
    
    const rv = root.val;
    if (val > rv) {
        if (root.right === null) {
            root.right = new TreeNode(val, null, null);
        } else {
            insertIntoBST(root.right, val);
        }
    } else {
        if (root.left === null) {
            root.left = new TreeNode(val, null, null);
        } else {
            insertIntoBST(root.left, val);
        }
    }
    return root;
};