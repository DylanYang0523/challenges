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
 * @return {boolean}
 */
var isValidBST = function(root) {
    let isValid = true;
    
    const isValidBSTRecursion = (node, min, max) => {
        if (!node || !isValid) return;
        if (node.val > min && node.val < max) {
            isValidBSTRecursion(node.left, min, node.val);
            isValidBSTRecursion(node.right, node.val, max);
        } else {
            isValid = false;
        }
    }
    
    isValidBSTRecursion(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
    
    return isValid;
};