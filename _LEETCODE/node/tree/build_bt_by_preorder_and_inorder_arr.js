/**
 * @lv 🟡
 * @link https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @name 105. Construct Binary Tree from Preorder and Inorder Traversal
 * @cate #tree, #recursion, #node
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0) return null;
    if (preorder.length === 1) return new TreeNode(preorder[0], null, null);
    
    // buildTree(startIndex, endIndex)
    // 1. startIndex = 0, endIndex = order.length
    // 2. put preorder[startIndex] as TreeNode
    // 3. find num's index in inorder arr, get left/right nodes counts
    // 4. if (l-count > 0) buildTree[startIndex + 1, startIndex + left nodes counts]
    // 5. if (r-count > 0) buildTree[startIndex + left nodes counts + 1, endIndex]
    // buildTree(0, order.length)
    
    let head = new TreeNode(preorder[0], null, null);
    
    const findInorderIdx = (num, startIdx, endIdx) => {
        for(let i = startIdx; i <= endIdx; i++) {
            if (num === inorder[i]) return i;
        }
    }
    
    const buildTree = (node, preSIdx, preEIdx, inSIdx, inEIdx) => {
        const targetInorderIndex = findInorderIdx(node.val, inSIdx, inEIdx);
        if (targetInorderIndex < 0 || targetInorderIndex === undefined) return;
        
        const leftCount = targetInorderIndex - inSIdx;
        const rightCount = inEIdx - targetInorderIndex;
        
        if (leftCount > 0) {
            node.left = new TreeNode(preorder[preSIdx + 1], null, null);
            buildTree(node.left, preSIdx + 1, preSIdx + leftCount, inSIdx, targetInorderIndex - 1);
        }
        if (rightCount > 0) {
            node.right = new TreeNode(preorder[preSIdx + leftCount + 1], null, null);
            buildTree(node.right, preSIdx + leftCount + 1, preEIdx, targetInorderIndex + 1, inEIdx);
        }
    }
    
    buildTree(head, 0, preorder.length - 1, 0, inorder.length - 1);
    
    return head;
};