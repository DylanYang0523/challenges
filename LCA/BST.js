/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 235. Lowest Common Ancestor of a Binary Search Tree
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const qVal = q.val;
    const pVal = p.val;
    const findLCA = (node) => {
        const nodeVal = node.val;
        if (nodeVal > pVal && nodeVal > qVal) {
            return findLCA(node.left);
        } else if (nodeVal < pVal && nodeVal < qVal) {
            return findLCA(node.right);
        } else {
            return node;
        }
    }
    return findLCA(root);
};