/**
 * @lv 🟡
 * @link https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * @name 106. Construct Binary Tree from Inorder and Postorder Traversal
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if (postorder.length === 0) return null;
    
    const head = new TreeNode(postorder[postorder.length - 1], null, null);
    if (postorder.length === 1) return head;
    
    const findInorderIndex = (val, startIdx, endIdx) => {
        for (let i = 0; i < inorder.length; i++) {
            if (inorder[i] === val) return i;
        }
    }
    
    const buildRecursion = (node, postSIdx, postEIdx, inSIdx, inEIdx) => {
        const targetInorderIndex = findInorderIndex(node.val, inSIdx, inEIdx);
        const leftCount = targetInorderIndex - inSIdx;
        const rightCount = inEIdx - targetInorderIndex;
        if (leftCount > 0) {
            node.left = new TreeNode(postorder[postEIdx - rightCount - 1], null, null);
            buildRecursion(node.left, postSIdx, postEIdx - rightCount - 1, inSIdx, targetInorderIndex - 1);
        }
        if (rightCount > 0) {
            node.right = new TreeNode(postorder[postEIdx - 1], null, null);
            buildRecursion(node.right, postEIdx - rightCount, postEIdx - 1, targetInorderIndex + 1, inEIdx);
        }
    }
    
    buildRecursion(head, 0, postorder.length - 1, 0, inorder.length - 1);
    
    return head;
};